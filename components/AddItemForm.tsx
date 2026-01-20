"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { getCurrentUser } from '@/lib/auth';
import { PhotoIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME || 'dmz9jzdtm';
const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'monochrome_shop';

export default function AddItemForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        console.error('Cloudinary error:', data);
        throw new Error(data.error?.message || `Cloudinary upload failed: ${res.status}`);
      }
      return data.secure_url;
    } catch (err: any) {
      console.error('Upload error:', err);
      throw new Error(err.message || 'Image upload failed');
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!name.trim()) {
      toast.error('Item name is required');
      return;
    }
    if (!description.trim()) {
      toast.error('Description is required');
      return;
    }
    const priceNum = Number(price);
    if (!price || isNaN(priceNum) || priceNum < 0) {
      toast.error('Please enter a valid price');
      return;
    }
    
    setLoading(true);
    try {
      const user = await getCurrentUser();
      if (!user) {
        toast.error('Please login first');
        router.push('/login');
        return;
      }

      let finalImageUrl = imageUrl;
      if (imageFile) {
        setUploading(true);
        finalImageUrl = await uploadToCloudinary(imageFile);
        setUploading(false);
      }

      const res = await fetch(`${API}/api/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          description,
          price: priceNum,
          image: finalImageUrl,
          userId: user.id,
        }),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Failed to create item');
      }
      const item = await res.json();
      toast.success('Item created successfully!');
      router.push(`/items/${item._id}`);
    } catch (err: any) {
      toast.error(err.message || 'Error creating item');
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      {/* Item Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Item Name *</label>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          type="text"
          placeholder="e.g., Classic Black Mug"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black rounded-lg focus:outline-none focus:border-black dark:focus:border-white"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-2">Description *</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
          rows={5}
          placeholder="Describe your product in detail..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black rounded-lg focus:outline-none focus:border-black dark:focus:border-white resize-none"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium mb-2">Price (USD) *</label>
        <div className="relative">
          <span className="absolute left-3 top-2 text-gray-500">$</span>
          <input 
            type="number" 
            step="0.01"
            min="0"
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
            placeholder="0.00"
            className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black rounded-lg focus:outline-none focus:border-black dark:focus:border-white"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="space-y-4">
        <h3 className="font-semibold">Product Image</h3>
        
        {/* Image URL Option */}
        <div>
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
            type="url"
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black rounded-lg focus:outline-none focus:border-black dark:focus:border-white"
          />
        </div>

        {/* File Upload Option */}
        <div>
          <label className="block text-sm font-medium mb-2">Or Upload Image File</label>
          <label className="flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 cursor-pointer hover:border-black dark:hover:border-white transition-colors">
            <div className="text-center">
              <PhotoIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImageFile(file);
                  toast.success(`Image selected: ${file.name}`);
                }
              }}
              className="hidden"
            />
          </label>
          {imageFile && (
            <div className="flex items-center gap-2 mt-2 p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
              <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
              <span className="text-sm text-green-600 dark:text-green-400">{imageFile.name}</span>
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={loading || uploading}
        className="w-full px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {uploading ? 'Uploading image...' : loading ? 'Creating item...' : 'Create Item'}
      </button>
    </form>
  );
}

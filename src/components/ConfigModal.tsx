import React, { useState } from 'react';
import { X, Save, RotateCcw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BusinessConfig, DEFAULT_BUSINESS_CONFIG } from '../config/business';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
  onSave: (newConfig: BusinessConfig) => void;
  onReset: () => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<BusinessConfig>({ ...config });
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  const handleResetToDefault = () => {
    if (window.confirm('Reset all business details to default verified placeholders?')) {
      onReset();
      setFormData({ ...DEFAULT_BUSINESS_CONFIG });
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="config-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E0D5C5] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8DEC8] flex items-center justify-between bg-white">
          <div>
            <h3 id="config-title" className="font-serif text-xl font-bold text-[#2D1F17]">
              Business Information & Settings
            </h3>
            <p className="text-xs text-[#7A6757]">
              Update placeholders when the business owner confirms final contact numbers and hours.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#5A4638] hover:bg-[#F2EAE0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          {savedNotice && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Settings saved successfully! All WhatsApp buttons are updated.</span>
            </div>
          )}

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>WhatsApp Number Format:</strong> Use country code followed by number without spaces or symbols (e.g. <code>919876543210</code> for India +91). All enquiry buttons will instantly route there.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                WhatsApp Number (Raw digits for wa.me)
              </label>
              <input
                type="text"
                name="whatsAppNumber"
                value={formData.whatsAppNumber}
                onChange={handleChange}
                placeholder="e.g. 919876543210"
                className="w-full px-3 py-2 text-sm bg-white border border-[#D5C7B7] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#8A3D24]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                Display Phone / WhatsApp Text
              </label>
              <input
                type="text"
                name="whatsAppDisplayNumber"
                value={formData.whatsAppDisplayNumber}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-3 py-2 text-sm bg-white border border-[#D5C7B7] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#8A3D24]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                Business Address Line
              </label>
              <input
                type="text"
                name="addressLine"
                value={formData.addressLine}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-white border border-[#D5C7B7] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#8A3D24]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                City, State, Country
              </label>
              <input
                type="text"
                name="locationCity"
                value={formData.locationCity}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-white border border-[#D5C7B7] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#8A3D24]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
              Business Hours (Placeholder)
            </label>
            <input
              type="text"
              name="businessHours"
              value={formData.businessHours}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm bg-white border border-[#D5C7B7] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#8A3D24]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
              Instagram Profile URL
            </label>
            <input
              type="url"
              name="instagramUrl"
              value={formData.instagramUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm bg-white border border-[#D5C7B7] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#8A3D24]"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#7A6757] hover:text-[#2D1F17] hover:bg-[#EAE2D5] rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#5A4638] hover:bg-[#EFE8DC] rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-[#8A3D24] hover:bg-[#702F1A] rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

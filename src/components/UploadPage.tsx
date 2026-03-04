import { useState } from 'react';
import { Upload, FileText, ArrowRight, ArrowLeft } from 'lucide-react';

interface UploadPageProps {
  onNavigate: (page: string) => void;
  onUploadComplete: () => void;
}

export default function UploadPage({ onNavigate, onUploadComplete }: UploadPageProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      onUploadComplete();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-2 text-gray-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">العودة</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900">خُطاك</span>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            ارفع سيرتك الذاتية
          </h1>
          <p className="text-lg text-gray-600">
            قم بتحميل ملف PDF لبدء التحليل الذكي
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
              isDragging
                ? 'border-teal-500 bg-teal-50'
                : 'border-gray-300 bg-gray-50 hover:border-teal-400 hover:bg-teal-50/50'
            }`}
          >
            {selectedFile ? (
              <div className="space-y-4">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="w-10 h-10 text-teal-500" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900 mb-1">
                    {selectedFile.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                  اختر ملفاً آخر
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                  <Upload className="w-10 h-10 text-gray-400" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900 mb-2">
                    اسحب وأفلت ملف PDF هنا
                  </p>
                  <p className="text-gray-500 mb-4">أو</p>
                  <label className="inline-block">
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <span className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer inline-block font-medium">
                      اختر ملفاً من جهازك
                    </span>
                  </label>
                </div>
                <p className="text-sm text-gray-500">
                  الحد الأقصى لحجم الملف: 10 MB
                </p>
              </div>
            )}
          </div>

          {selectedFile && (
            <div className="mt-8">
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-teal-500/30"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    جارٍ التحليل...
                  </>
                ) : (
                  <>
                    ابدأ التحليل
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            نصائح للحصول على أفضل نتائج:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>تأكد من أن السيرة الذاتية بصيغة PDF واضحة وقابلة للقراءة</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>استخدم خطوطاً قياسية ومقروءة</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>تجنب استخدام الصور أو التصاميم المعقدة</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

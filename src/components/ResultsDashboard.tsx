import { ArrowLeft, TrendingUp, Target, CheckCircle, AlertCircle, Lightbulb, Award } from 'lucide-react';

interface ResultsDashboardProps {
  onNavigate: (page: string) => void;
}

export default function ResultsDashboard({ onNavigate }: ResultsDashboardProps) {
  const mockResults = {
    cvScore: 72,
    jobMatch: 64,
    atsCompatibility: 81,
    improvementsSuggested: 5,
    strengths: [
      'خبرة عملية قوية في مجال التطوير',
      'مهارات تقنية متنوعة ومحدثة',
      'شهادات احترافية معتمدة',
      'مشاريع عملية موثقة بشكل جيد',
    ],
    improvements: [
      'إضافة ملخص احترافي في بداية السيرة الذاتية',
      'تحديد الإنجازات بأرقام ومقاييس واضحة',
      'تحسين تنسيق قسم التعليم',
      'إضافة كلمات مفتاحية متعلقة بالمجال',
      'تقليل استخدام الجمل الطويلة',
    ],
    recommendedSkills: [
      'React.js',
      'TypeScript',
      'Cloud Computing',
      'Agile Methodology',
      'API Design',
      'Database Optimization',
    ],
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-50 border-green-200';
    if (score >= 60) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => onNavigate('upload')}
            className="flex items-center gap-2 text-gray-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">تحليل سيرة جديدة</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900">خُطاك</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            نتائج التحليل
          </h1>
          <p className="text-gray-600">
            إليك تحليلاً شاملاً لسيرتك الذاتية مع توصيات للتحسين
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className={`bg-white rounded-xl p-6 border-2 shadow-sm ${getScoreBgColor(mockResults.cvScore)}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <TrendingUp className={`w-5 h-5 ${getScoreColor(mockResults.cvScore)}`} />
            </div>
            <div className={`text-4xl font-bold mb-1 ${getScoreColor(mockResults.cvScore)}`}>
              {mockResults.cvScore}/100
            </div>
            <div className="text-sm font-medium text-gray-600">درجة السيرة الذاتية</div>
          </div>

          <div className={`bg-white rounded-xl p-6 border-2 shadow-sm ${getScoreBgColor(mockResults.jobMatch)}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <TrendingUp className={`w-5 h-5 ${getScoreColor(mockResults.jobMatch)}`} />
            </div>
            <div className={`text-4xl font-bold mb-1 ${getScoreColor(mockResults.jobMatch)}`}>
              {mockResults.jobMatch}%
            </div>
            <div className="text-sm font-medium text-gray-600">مطابقة الوظيفة</div>
          </div>

          <div className={`bg-white rounded-xl p-6 border-2 shadow-sm ${getScoreBgColor(mockResults.atsCompatibility)}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <TrendingUp className={`w-5 h-5 ${getScoreColor(mockResults.atsCompatibility)}`} />
            </div>
            <div className={`text-4xl font-bold mb-1 ${getScoreColor(mockResults.atsCompatibility)}`}>
              {mockResults.atsCompatibility}%
            </div>
            <div className="text-sm font-medium text-gray-600">توافق ATS</div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-purple-200 bg-purple-50 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <AlertCircle className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-4xl font-bold text-purple-600 mb-1">
              {mockResults.improvementsSuggested}
            </div>
            <div className="text-sm font-medium text-gray-600">اقتراحات للتحسين</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">نقاط القوة</h2>
            </div>
            <div className="space-y-3">
              {mockResults.strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">{strength}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">نقاط التحسين</h2>
            </div>
            <div className="space-y-3">
              {mockResults.improvements.map((improvement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-100"
                >
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">{improvement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">المهارات الموصى بها</h2>
          </div>
          <p className="text-gray-600 mb-6">
            إضافة هذه المهارات قد تحسن من فرصك في الحصول على الوظيفة المناسبة
          </p>
          <div className="flex flex-wrap gap-3">
            {mockResults.recommendedSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 font-medium hover:bg-blue-100 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('upload')}
            className="px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-semibold text-lg shadow-lg shadow-teal-500/30"
          >
            تحليل سيرة ذاتية أخرى
          </button>
        </div>
      </div>
    </div>
  );
}

import { Upload, Eye, Target, CheckCircle, BarChart3, FileText, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Target className="w-8 h-8 text-teal-500" />
            <span className="text-2xl font-bold text-slate-900">خُطاك</span>
          </div>
          <button
            onClick={() => onNavigate('upload')}
            className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            ابدأ الآن
          </button>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            خُطاك – اصنع مسارك المهني بذكاء
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            حلل سيرتك الذاتية، اكتشف نقاط قوتك، وحسّن فرصك في الحصول على الوظيفة المناسبة.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => onNavigate('upload')}
              className="px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-semibold text-lg flex items-center gap-2 shadow-lg shadow-teal-500/30"
            >
              <Upload className="w-5 h-5" />
              ارفع سيرتك الذاتية
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-lg hover:border-slate-300 transition-colors font-semibold text-lg flex items-center gap-2">
              <Eye className="w-5 h-5" />
              شاهد كيف يعمل
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
          كيف يعمل؟
        </h2>
        <p className="text-gray-600 text-center mb-16">ثلاث خطوات بسيطة للوصول إلى وظيفة أحلامك</p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">ارفع سيرتك الذاتية</h3>
            <p className="text-gray-600 leading-relaxed">
              قم بتحميل ملف السيرة الذاتية بصيغة PDF بسهولة وأمان
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">الذكاء الاصطناعي يحلل السيرة</h3>
            <p className="text-gray-600 leading-relaxed">
              تقنية AI متقدمة تحلل محتوى سيرتك الذاتية بدقة عالية
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">احصل على رؤى قابلة للتنفيذ</h3>
            <p className="text-gray-600 leading-relaxed">
              تقارير مفصلة مع توصيات عملية لتحسين فرصك
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
          المزايا الرئيسية
        </h2>
        <p className="text-gray-600 text-center mb-16">كل ما تحتاجه لتحسين سيرتك الذاتية</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-teal-200 transition-all hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">تحليل السيرة بالذكاء الاصطناعي</h3>
                <p className="text-gray-600 leading-relaxed">
                  تحليل شامل لمحتوى سيرتك الذاتية باستخدام أحدث تقنيات الذكاء الاصطناعي
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-teal-200 transition-all hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">درجة مطابقة الوظيفة</h3>
                <p className="text-gray-600 leading-relaxed">
                  اكتشف مدى توافق سيرتك الذاتية مع متطلبات سوق العمل
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-teal-200 transition-all hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">فحص توافق ATS</h3>
                <p className="text-gray-600 leading-relaxed">
                  تأكد من أن سيرتك الذاتية متوافقة مع أنظمة تتبع المتقدمين
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-teal-200 transition-all hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">اقتراحات تحسين ذكية</h3>
                <p className="text-gray-600 leading-relaxed">
                  توصيات مخصصة وقابلة للتنفيذ لتحسين سيرتك الذاتية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            جاهز لتحسين سيرتك الذاتية؟
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            ابدأ الآن واحصل على تحليل شامل في دقائق
          </p>
          <button
            onClick={() => onNavigate('upload')}
            className="px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-semibold text-lg shadow-lg shadow-teal-500/30"
          >
            ابدأ التحليل المجاني
          </button>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          <p>© 2026 خُطاك. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}

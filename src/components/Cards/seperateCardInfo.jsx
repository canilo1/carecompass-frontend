import { Button } from "../ui/button";
import { Card } from "../ui/card";

const CardInfo = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center px-6 py-16">

      {/* ===== PROBLEM SECTION ===== */}
      <h1 className="text-[#1d325b] text-2xl font-semibold text-center">
        We know HealthCare Can be Challenging
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <Card className="flex flex-col p-6 hover:bg-blue-100 min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Language Barriers
          </h2>
          <p className="text-sm text-gray-600">
            Don’t speak English? Have medical documents you can’t understand?
            You’re not alone.
          </p>
        </Card>

        <Card className="flex flex-col p-6 hover:bg-blue-100 min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Fear & Misinformation
          </h2>
          <p className="text-sm text-gray-600">
            You have the right to emergency medical care regardless of
            immigration status. EMTALA law protects you.
          </p>
        </Card>

        <Card className="flex flex-col p-6 hover:bg-blue-100 min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Instant Medical Translation
          </h2>
          <p className="text-sm text-gray-600">
            Upload prescriptions or lab results and we’ll translate them
            instantly into your preferred language.
          </p>
        </Card>
      </div>

      {/* ===== SOLUTION SECTION ===== */}
      <h1 className="text-[#1d325b] text-2xl font-semibold text-center">
        How CareCompass Can Help You
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <Card className="flex flex-col p-6 hover:bg-blue-100 min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Find Clinics Near You
          </h2>
          <p className="text-sm text-gray-600">
            Search by zip code or city. Filter by language, specialty, or service.
          </p>
        </Card>

        <Card className="flex flex-col p-6 hover:bg-blue-100 min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Total Privacy
          </h2>
          <p className="text-sm text-gray-600">
            No immigration data collected. Your information stays yours.
          </p>
        </Card>

        <Card className="flex flex-col p-6 hover:bg-blue-100 min-h-[260px]">
          <img className="w-12 h-12 mb-4" />
          <h2 className="text-[#1d325b] font-bold text-lg mb-2">
            Medical Translation
          </h2>
          <p className="text-sm text-gray-600">
            Instantly translate prescriptions, labs, and medical paperwork.
          </p>
        </Card>
      </div>

      {/* ===== CTA SECTION ===== */}
      <div className="text-center space-y-4">
        <h1 className="text-[#1d325b] text-2xl font-semibold">
          Start Your Journey to Better Health Today
        </h1>

        <p className="text-lg">
          Thousands of people already trust{" "}
          <span className="font-bold text-[#1d325b]">CareCompass</span>
        </p>

        <div className="flex justify-center gap-6 pt-4">
          <Button className="text-lg bg-blue-500 hover:bg-blue-700">
            Create My Free Account
          </Button>
          <Button className="text-lg bg-green-700 hover:bg-green-800">
            Explore Clinics
          </Button>
        </div>
      </div>

      {/* ===== MEDICAL EMERGENCY BANNER ===== */}
      <div className="w-full max-w-6xl bg-yellow-100 border border-yellow-300 rounded-md p-4 flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
        <span className="text-red-600 font-semibold">
          🚨 Medical Emergency?
        </span>
        <span className="text-gray-700">
          Call <strong>911</strong> immediately. You have the right to emergency
          care regardless of immigration status.
        </span>
      </div>

      {/* ===== TRUST / FOOTER ICONS ===== */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6 text-sm text-gray-600 pt-6">
        <div className="flex items-center gap-2">🔐 256-Bit Encryption</div>
        <div className="flex items-center gap-2">🛡 HIPAA Compliant</div>
        <div className="flex items-center gap-2">🚫 No Immigration Data</div>
        <div className="flex items-center gap-2">💙 Forever Free</div>
      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      <div className="w-full border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 max-w-6xl">
        <p>© 2025 CareCompass. All rights reserved.</p>

        <select className="border rounded px-2 py-1 mt-2 md:mt-0">
          <option>English</option>
          <option>Español</option>
        </select>
      </div>

    </div>
  );
};

export default CardInfo;

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    alert("Google login clicked!");
    navigate("/notes"); // redirect to notes page
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-4 w-80 h-[90px] bg-white rounded-2xl 
                   hover:scale-105 transition-transform duration-200
                   shadow-[0_10px_20px_rgba(255,255,255,0.7)]"
      >
        {/* Google G logo (black) */}
        <svg
          className="w-8 h-8 text-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
          fill="currentColor"
        >
          <path d="M488 261.8C488 403.3 391.1 504 248.9 504 111.6 504 0 392.4 0 255.1 0 117.9 111.6 6.3 248.9 6.3c66.7 0 122.5 24.5 165.3 64.7l-67 64.7c-18.5-17.7-50.6-38.4-98.3-38.4-84.1 0-152.3 69.2-152.3 154.7 0 85.5 68.2 154.7 152.3 154.7 97.4 0 134-69.8 139.6-106.1H248.9v-84.7h239.1c2.2 12.2 3.9 24.4 3.9 39.6z"/>
        </svg>

        <span className="text-lg font-medium text-gray-800">
          Continue with Google
        </span>
      </button>
    </div>
  );
}

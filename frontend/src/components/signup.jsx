
import logo from '../assets/logo.png';
import { SocialButton } from './Button';
import { FaGoogle, FaTelegramPlane, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function SignUp() {
  return (<>
    <div id="login" className="bg-[#181a20] min-h-screen flex items-center justify-center">
      <div className="rounded-xl bg-[#181a20] border-2 border-[#2f323b] w-11/12 md:w-1/3 lg:w-1/4 md:mt-10  p-6 mb-4">
        <div className="flex flex-col items-center space-y-6">
          <img src={logo} alt="logo" className="w-1/2 mr-auto" />
          <h1 className="font-bold text-2xl text-white text-center">Welcome to Binance</h1>

          <form className="w-full">
            <div className="relative w-full">
              <label htmlFor="email" className="text-white text-sm absolute top-[-12px] left-2 bg-[#181a20] px-1">
                Email / Phone number
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full mt-3 p-3 rounded-md bg-[#181a20] border-2 border-[#2f323b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Email / phone (without country code)"
              />
            </div>
              <input type="checkbox" name='check' id='check'
            className='px-2 mr-2'/>
         
            <label htmlFor="check" className='text-white cursor-pointer text-sm bg-[#181a20]'>
                By creating an account, I agree to Binance's Terms of serive  and Privacy Notice
                </label>
                <button type='submit' className='bg-yellow-400 hover:bg-yellow-500 cursor-pointer rounded-md w-full h-10 mt-4'>Next</button>
                <div className="flex items-center my-6">
  <div className="flex-grow border-t border-gray-600"></div>
  <span className="mx-4 text-gray-400 text-sm">or</span>
  <div className="flex-grow border-t border-gray-600"></div>
</div>

<SocialButton label="Continue with Gmail"  icon={<FaGoogle />} />     
<SocialButton label="Continue with Apple"  icon={<FaApple />} />     
<SocialButton label="Continue with Telegram"  icon={<FaTelegramPlane />} />     
      </form>
        </div>
      </div>
 
    </div>
       <div className="mt-4 flex justify-center">
    <Link to="/login" className="text-yellow-300 hover:text-yellow-400">
     Login to your account
    </Link>
  </div> 
    </>
  );
}
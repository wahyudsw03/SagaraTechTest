import logo from '../img/logoSagara.svg';
import logoWhite from '../img/sagaraWhite.png';
import reasonOne from '../img/reasonOne.svg';
import reasonTwo from '../img/reasonTwo.svg';
import reasonThree from '../img/reasonThree.svg';
import howSatu from '../img/howSatu.svg';
import howDua from '../img/howDua.svg';
import howTiga from '../img/howTiga.svg';
import howEmpat from '../img/howEmpat.svg';
import howLima from '../img/howLima.svg';
import { useState } from 'react';
import './landing.css';


const Landing = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('frontend');

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = {
    frontend: {
      title: 'Front End Certification',
      points: [
        'This program equips you with the essential skills and knowledge to create visually appealing websites or applications.',
        'Evaluates your proficiency in frontend programming languages and other relevant frontend technologies.',
        'Gain recognition as a qualified frontend developer, enhance your career prospects, and open doors to exciting job opportunities.',
      ],
    },
    backend: {
      title: 'Back End Certification',
      points: [
        'This program equips you with the essential skills and knowledge to create robust server-side applications and manage databases.',
        'Evaluates your proficiency in backend programming languages and other relevant backend technologies.',
        'Gain recognition as a skilled backend developer, enhance your career prospects, and open doors to exciting job opportunities.',
      ],
    },
    qa: {
      title: 'Quality Assurance Certification',
      points: [
        'This program equips you with the essential skills and knowledge to ensure software quality and identify bugs effectively.',
        'Evaluates your proficiency in QA methodologies, testing tools, and techniques.',
        'Gain recognition as a qualified QA specialist, enhance your career prospects, and open doors to exciting job opportunities.',
      ],
    },
    uiux: {
      title: 'UI/UX Design Certification',
      points: [
        'This program equips you with the essential skills and knowledge to design user-friendly interfaces and enhance user experience.',
        'Evaluates your proficiency in UI/UX design principles, tools, and techniques.',
        'Gain recognition as a skilled UI/UX designer, enhance your career prospects, and open doors to exciting job opportunities.',
      ],
    },
  };


  return (
    <div className="App">
      {/* Navbar */}
      <nav class="bg-gray-100">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div>
                <a href="#" class="flex items-center py-3 px-2 text-gray-700">
                  <img src={logo} class="w-28"/>
                </a>
              </div>        
              <div class="hidden md:flex items-center space-x-1">
                <a href="#" class="py-5 px-3 text-gray-400 ">IT CERTIFICATION</a>
                <div className="dropdown">
                    <button className="dropbtn" class="text-gray-400 inline-flex w-full justify-center gap-x-1.5">CAREERS
                      <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                      </svg>
                    </button>
                    <div class="dropdown-content">
                      <a class="text-gray-400" href="#">JOB VACANCY</a>
                      <a class="text-gray-400" href="#">TRAINING</a>
                      <a class="text-gray-400" href="#">TEACHING</a>
                    </div>
                </div>
                <a href="#" class="py-5 px-3 text-gray-400 ">FAQ</a>
              </div>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <a href="/dashboard" class="text-sm py-3 px-10 bg-[#a51535] rounded-lg">
                <p class="text-sm/[18px] text-white font-bold">SIGN IN</p>
                </a>
            </div>

            <div class="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={handleMobileMenuToggle}>
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">IT CERTIFICATION</a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">CAREERS</a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">FAQ</a>
        </div>
      </nav>
      {/* End Navbar */}

      {/* Content */}

      {/* Living */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('./sittingPerson.png')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12 lg:p-28">
            <p className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-2">
              <span className="font-normal">Live</span> Your Best <span className="font-light">Life</span>
            </p>
            <p className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-2 pb-2">
              <span className="font-normal">Using</span> Your Strengths
            </p>
            <p className="text-white text-xs md:text-sm lg:text-base mb-4 max-w-sm md:max-w-md lg:max-w-lg text-left pb-6">
              Meet some of the people who have completed the Sagara Technology and use their results to maximize their potential at work and everywhere else.
            </p>
            <button className="bg-[#a51535] text-white font-bold py-2 px-6 md:py-3 md:px-8 lg:py-3 lg:px-10 rounded-md text-sm md:text-base lg:text-lg">
              Get Certification
            </button>
          </div>
        </div>
      </div>
      {/* End Living */}

      {/* About Us */}
      <section className="flex flex-col md:flex-row m-12">
        <div className="flex-1 flex flex-col items-center justify-center text-center mb-8 md:mb-0">
          <div className="w-24 h-[4px] bg-black mb-2 rounded-lg"/>
          <h1 className="lg:text-4xl md:text-2xl font-bold">About Us</h1>
        </div>
        <div className="flex-1 text-left md:text-left">
          <h2 className="font-bold text-[#a51535] lg:text-xl md:text-lg">SAGARA IT CERTIFICATION</h2>
          <p className="text-base lg:text-4xl md:text-xl my-4">
            <span className="font-bold text-[#a51535]">Join thousands</span> <span className="font-semibold bg-gradient-to-r from-black to-[#a51535] text-transparent bg-clip-text">of professionals who have elevated their skills and carved out success in the technology industry. Start your journey to excellence with us today!</span>
          </p>
          <p className="lg:text-xl md:text-lg text-gray-500">Boost your career prospects in the digital era with industry-recognized information technology certifications from Sagara IT Certification.</p>
        </div>
      </section>
      {/* End About Us */}


      {/* Why */}
      <div className="flex flex-col lg:flex-row text-left mb-8">
        <div className="flex-1 p-6 lg:p-12 flex flex-col space-y-8 lg:space-y-12">
          <h2 className="text-[#a51535] text-2xl lg:text-4xl font-bold mb-6">WHY SAGARA IT CERTIFICATION?</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <img src={reasonOne} alt="Global Credibility Boost Icon" className="w-12 h-12 lg:w-16 lg:h-16" />
              <div>
                <h3 className="text-[#a51535] text-lg lg:text-xl font-semibold">Global Credibility Boost</h3>
                <p className="text-gray-600 text-sm lg:text-base">Our certifications are globally recognized, enhancing your credibility, and opening doors to new opportunities.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img src={reasonTwo} alt="Empowering Careers Icon" className="w-12 h-12 lg:w-16 lg:h-16" />
              <div>
                <h3 className="text-[#a51535] text-lg lg:text-xl font-semibold">Empowering Careers</h3>
                <p className="text-gray-600 text-sm lg:text-base">Equipped to advance your career, secure promotions, and pursue new job opportunities in the ever-evolving tech industry.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img src={reasonThree} alt="Expertise Validation Icon" className="w-12 h-12 lg:w-16 lg:h-16" />
              <div>
                <h3 className="text-[#a51535] text-lg lg:text-xl font-semibold">Expertise Validation</h3>
                <p className="text-gray-600 text-sm lg:text-base">Showcase your expertise and validate your skills with globally recognized certifications that employers trust.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center lg:mr-8 md:mr-8">
          <div className="relative w-full max-w-full h-3/4">
            <img
              src="./bigPic.png"
              className="object-cover w-full h-full rounded-xl"
              style={{ maxHeight: '100%' }}
            />
          </div>
        </div>

      </div>
      {/* End Why */}

      {/* How Sagara */}
      <div className="flex-1 flex flex-col items-center justify-center text-center mb-8 md:mb-0">
        <div className="w-16 h-[4px] bg-[#a51535] mb-2 rounded-lg"/>
      </div>
      <h2 className="text-[#a51535] text-2xl lg:text-4xl font-semibold mb-6 mt-4">How Sagara</h2>
      <h2 className="text-[#a51535] text-2xl lg:text-4xl font-bold mb-6">IT-Certification Works</h2>
      <div className="flex flex-col lg:flex-row text-left mb-8">
        <div className="flex-1 flex items-center justify-center lg:ml-8 md:ml-8 mb-8 lg:mb-0">
          <div className="relative w-full max-w-full h-3/4">
            <img
              src="./groupGuy.png"
              className="object-contain w-full h-full rounded-xl"
              style={{ maxHeight: '100%' }}
            />
          </div>
        </div>
        <div className="flex-1 p-6 lg:p-12 flex flex-col space-y-8 lg:space-y-12">
          <div className="space-y-8 lg:space-y-12">
            <div className="relative flex items-start space-x-4">
              <div className="absolute top-0 bottom-0 left-[28px] w-[2px] border-l-2 border-dotted border-gray-400 z-0"></div>
              <img src={howSatu} alt="Global Credibility Boost Icon" className="w-12 h-12 lg:w-28 lg:h-28 relative z-10" />
              <div className="ml-4">
                <h3 className="text-[#a51535] text-lg lg:text-xl font-bold">#1 <span className="text-black font-bold">Register Account</span></h3>
                <p className="text-gray-600 text-sm lg:text-base">Begin your journey by creating an account on Sagara IT Certification platform. Simply fill out the registration form to get started.</p>
              </div>
            </div>
            <div className="relative flex items-start space-x-4">
              <div className="absolute top-0 bottom-0 left-[28px] w-[2px] border-l-2 border-dotted border-gray-400 z-0"></div>
              <img src={howLima} alt="Empowering Careers Icon" className="w-12 h-12 lg:w-28 lg:h-28 relative z-10" />
              <div className="ml-4">
                <h3 className="text-[#a51535] text-lg lg:text-xl font-bold">#2 <span className="text-black font-bold">Select the Type</span></h3>
                <p className="text-gray-600 text-sm lg:text-base">Choose from a variety of IT certification options tailored to your career goals and interests. Select the certification that aligns with your expertise.</p>
              </div>
            </div>
            <div className="relative flex items-start space-x-4">
              <div className="absolute top-0 bottom-0 left-[28px] w-[2px] border-l-2 border-dotted border-gray-400 z-0"></div>
              <img src={howTiga} alt="Expertise Validation Icon" className="w-12 h-12 lg:w-28 lg:h-28 relative z-10" />
              <div className="ml-4">
                <h3 className="text-[#a51535] text-lg lg:text-xl font-bold">#3 <span className="text-black font-bold">Register and Pay</span></h3>
                <p className="text-gray-600 text-sm lg:text-base">Enroll in your chosen certification program by completing the registration process and making payment securely through our platform.</p>
              </div>
            </div>
            <div className="relative flex items-start space-x-4">
              <div className="absolute top-0 bottom-0 left-[28px] w-[2px] border-l-2 border-dotted border-gray-400 z-0"></div>
              <img src={howEmpat} alt="Expertise Validation Icon" className="w-12 h-12 lg:w-28 lg:h-28 relative z-10" />
              <div className="ml-4">
                <h3 className="text-[#a51535] text-lg lg:text-xl font-bold">#4 <span className="text-black font-bold">Take Test</span></h3>
                <p className="text-gray-600 text-sm lg:text-base">Prepare for your certification exam and schedule a convenient time to take the test online.</p>
              </div>
            </div>
            <div className="relative flex items-start space-x-4">
              <div className="absolute top-0 bottom-0 left-[28px] w-[2px] border-l-2 border-dotted border-gray-400 z-0"></div>
              <img src={howDua} alt="Expertise Validation Icon" className="w-12 h-12 lg:w-28 lg:h-28 relative z-10" />
              <div className="ml-4">
                <h3 className="text-[#a51535] text-lg lg:text-xl font-bold">#5 <span className="text-black font-bold">Get the certificate</span></h3>
                <p className="text-gray-600 text-sm lg:text-base">Upon successful completion of the exam, receive your certification digitally, instantly validating your skills and expertise in the chosen IT field.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center mb-8">
        <div className="w-16 h-[4px] bg-[#a51535] mb-2 rounded-lg"/>
      </div>
      {/* End How Sagara */}

       {/* Empower */}
       <h2 className="text-[#a51535] text-2xl lg:text-4xl font-semibold mb-6 mt-8 text-center">Empower Yourself with</h2>
       <h2 className="text-[#a51535] text-2xl lg:text-4xl font-bold mb-6 text-center">Our Certification</h2>

       <div className="flex flex-col items-center justify-center space-y-6 p-4 md:p-6 lg:p-8">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center space-x-2 mb-6">
        <button
          onClick={() => handleTabChange('frontend')}
          className={`px-4 py-2 rounded-md border ${
            activeTab === 'frontend'
              ? 'bg-[#a51535] text-white border-[#a51535]'
              : 'border-black text-black'
          } hover:bg-[#a51535] hover:text-white transition-all duration-300`}
        >
          Front End Developer
        </button>
        <button
          onClick={() => handleTabChange('backend')}
          className={`px-4 py-2 rounded-md border ${
            activeTab === 'backend'
              ? 'bg-[#a51535] text-white border-[#a51535]'
              : 'border-black text-black'
          } hover:bg-[#a51535] hover:text-white transition-all duration-300`}
        >
          Back End Developer
        </button>
        <button
          onClick={() => handleTabChange('qa')}
          className={`px-4 py-2 rounded-md border ${
            activeTab === 'qa'
              ? 'bg-[#a51535] text-white border-[#a51535]'
              : 'border-black text-black'
          } hover:bg-[#a51535] hover:text-white transition-all duration-300`}
        >
          Quality Assurance
        </button>
        <button
          onClick={() => handleTabChange('uiux')}
          className={`px-4 py-2 rounded-md border ${
            activeTab === 'uiux'
              ? 'bg-[#a51535] text-white border-[#a51535]'
              : 'border-black text-black'
          } hover:bg-[#a51535] hover:text-white transition-all duration-300`}
        >
          UI/UX Design
        </button>
      </div>
      <div className="flex flex-col lg:flex-row w-full space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-1">
          <img
            src="./codePicture.png"
            alt="Code Illustration"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 p-4 lg:p-8 flex flex-col space-y-6 text-left rounded-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#a51535]">
            {tabContent[activeTab].title}
          </h2>
          {tabContent[activeTab].points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img src={howTiga} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" alt={`Icon ${index + 1}`} />
              <p className="text-gray-700 text-sm lg:text-base">{point}</p>
            </div>
          ))}

          <button className="self-center w-full max-w-xs h-12 px-6 py-2 bg-[#a51535] text-white rounded-md">
            Get Detail
          </button>
        </div>
      </div>
    </div>
        {/* End Empower */}

        {/* End Content */}

      {/* Footer */}
      <footer className="bg-[#1C1C1C] py-12">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between">
    <div className="flex flex-col text-left mb-8 md:mb-0">
      <img src={logoWhite} alt="Sagara Logo" className="w-28 mb-4" />
      <p className="text-white mb-4">Plan, build, grow digital products. Continuously delivering impact.</p>
      <div className="flex space-x-4">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72" fill="none">
            <path d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z" fill="#f3f4f6" />
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"fill="none">
                  <path
                    d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
                    fill="#f3f4f6" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"fill="none">
                  <path
                    d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                    fill="#f3f4f6" />
                </svg>
              </a>
              <a href="#" >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72" fill="none">
                  <path
                    d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"
                    fill="#f3f4f6" />
                </svg>
              </a>
      </div>
    </div>

    <div className="flex flex-col md:flex-row md:space-x-12 text-white pl-16">
      <div className="flex flex-col text-left mb-8 md:mb-0">
        <h4 className="font-bold mb-4">Pages</h4>
        <a href="#">Careers</a>
        <a href="#">FAQ</a>
        <a href="#">Terms & Condition</a>
        <a href="#">IT Certification</a>
      </div>
      <div className="flex flex-col text-left mb-8 md:mb-0">
        <h4 className="font-bold mb-4">Careers</h4>
        <a href="#">Front End Developer</a>
        <a href="#">Back End Developer</a>
        <a href="#">Quality Assurance</a>
        <a href="#">UI/UX Design</a>
      </div>
      <div className="flex flex-col text-left">
        <h4 className="font-bold mb-4">Contact</h4>
        <div className="flex items-center mb-2">
          <svg alt="phoneNumber" className="h-8 w-8 text-slate-100 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          +62 856-4097-7356
        </div>
        <div className="flex items-center mb-2">
          <svg alt="mail" className="h-8 w-8 text-slate-100 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <rect x="3" y="5" width="18" height="14" rx="2" />  
            <polyline points="3 7 12 13 21 7" />
          </svg>
          consult@sagara.asia
        </div>
        <div className="flex items-center">
          <svg alt="location" className="h-8 w-8 text-slate-100 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          South Jakarta and Bandung, Indonesia.
        </div>
      </div>
    </div>
  </div>
  <div className="text-center text-white mt-8">
    <p>Copyright © 2024 PT. Sagara Asia Teknologi</p>
  </div>
      </footer>
      {/* End Footer */}
    </div>
  );
}

export default Landing;

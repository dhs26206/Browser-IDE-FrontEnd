const teamMembers = [
  { 
    name: 'Manpreet', 
    role: 'Backend', 
    image: 'https://folder.ddks.live/team-img1.png', 
    instaLink: 'https://instagram.com/manpreet',
    gitLink: 'https://github.com/manpreet',
    linkedinLink: 'https://linkedin.com/in/manpreet'
  },
  { 
    name: 'Gaurav', 
    role: 'Backend', 
    image: 'https://folder.ddks.live/team-img2.png', 
    instaLink: 'https://instagram.com/gaurav',
    gitLink: 'https://github.com/gaurav',
    linkedinLink: 'https://linkedin.com/in/gaurav'
  },
  { 
    name: 'Dhruv', 
    role: 'Frontend', 
    image: 'https://folder.ddks.live/team-img3.png', 
    instaLink: 'https://instagram.com/dhruv',
    gitLink: 'https://github.com/dhruv',
    linkedinLink: 'https://linkedin.com/in/dhruv'
  },
  { 
    name:'Ayush', 
    role:'Frontend', 
    image:'https://folder.ddks.live/avatar-2.png',
    instaLink: 'https://instagram.com/ayush',
    gitLink: 'https://github.com/ayush',
    linkedinLink: 'https://linkedin.com/in/ayush'
  },
];

const Team = () => {
  return (
    <div className="h-full w-full flex flex-wrap items-center justify-center">
      <div className="md:w-[75%] w-full md:h-[60%]">
        <div className="intro h-[35%] w-full">
          <span className="font-semibold">We are ashleel coders</span>
          <div className="text-4xl">
            We have a <span className="italic">Talented</span> Team
          </div>
          <p>
            "Asleel Coders" is an innovative tech community focused on leveraging cutting-edge programming and software development techniques
          </p>
        </div>
        <div className="team-members h-[65%] flex flex-wrap gap-3 justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="w-full flex justify-center mb-2">
                <img src={member.image} height={'100px'} width={'100px'} alt={member.name} className="rounded-full" />
              </div>
              <div className="w-full flex flex-col items-center">
                <h3 className="text-center font-bold">{member.name}</h3>
                <p className="text-center font-semibold">{member.role}</p>
                <div className="flex mt-2 space-x-4">
                  {/* Instagram Icon with Circular Background */}
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
                    <img
                      className="h-6 w-6 cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                      alt="Instagram"
                      onClick={() => { window.location.href = member.instaLink; }}
                    />
                  </div>
                  {/* GitHub Icon with Circular Background */}
                  
                  {/* LinkedIn Icon with Circular Background */}
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
                    <img
                      className="h-6 w-6 cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                      alt="LinkedIn"
                      onClick={() => { window.location.href = member.linkedinLink; }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;


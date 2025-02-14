const teamMembers = [
  { 
    name: 'Manpreet', 
    role: 'Backend', 
    image: 'https://folder.ddks.tech/team-img1.png', 
    instaLink: 'https://www.instagram.com/manpreet_singh.1040',
    gitLink: 'https://github.com/manpreet-singh1040',
    linkedinLink: 'https://www.linkedin.com/in/manpreet-singh-298910262'
  },
  { 
    name: 'Gaurav', 
    role: 'Traitor', 
    image: 'https://folder.ddks.tech/team-img2.png', 
    instaLink: 'https://instagram.com/gaurav',
    gitLink: 'https://github.com/gaurav',
    linkedinLink: 'https://linkedin.com/in/gaurav'
  },
  { 
    name: 'Dhruv', 
    role: 'Frontend', 
    image: 'https://folder.ddks.tech/team-img3.png', 
    instaLink: 'https://www.instagram.com/dhruv.kr.sharma',
    gitLink: 'https://github.com/dhs26206',
    linkedinLink: 'https://www.linkedin.com/in/dhruv-kumar-1ab142289'
  },
  { 
    name:'Ayush', 
    role:'Frontend', 
    image:'https://folder.ddks.tech/avatar-2.png',
    instaLink: 'https://www.instagram.com/iyus_pandey',
    gitLink: 'https://github.com/iyuspandey',
    linkedinLink: 'https://www.linkedin.com/in/ayush-pandey-308938278'
  },
];

const Team = () => {
  return (
    <div className="h-full w-full flex flex-wrap items-center justify-center">
      <div className="md:w-[75%] w-full md:h-[60%]">
        <div className="intro h-[35%] w-full">
          <span className="font-semibold">We are Humans !!</span>
          <div className="text-4xl">
            We have a <span className="italic">Talented</span> Team
          </div>
          <p>
            
          </p>
        </div>
        <div className="team-members h-[65%] flex flex-wrap gap-3 justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="w-full flex justify-center mb-2">
                <img src={member.image} height={'100px'} width={'100px'} alt={member.name} className="rounded-full" />
              </div>
              <div className="w-full flex flex-col items-center">
                <h3 className="text-center font-bold text-blue-500">{member.name}</h3>
                <p className="text-center font-semibold text-pink-400">{member.role}</p>
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
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
                    <img
                      className="h-6 w-6 cursor-pointer"
                      src="https://folder.ddks.tech/githublogov2.png"
                      alt="GitHub"
                      onClick={() => { window.location.href = member.gitLink; }}
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


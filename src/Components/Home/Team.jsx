
// import './team.css';
// import jhon from './jhon.png';
// import nat from './gaurav.webp'
// import david from './david.png'
// import ayush from './ayush.jpg'
const teamMembers = [
  { name: 'Manpreet', role: 'Backend', image: 'https://folder.ddks.live/team-img1.png' },
  { name: 'Gaurav', role: 'Backend', image: 'https://folder.ddks.live/team-img2.png' },
  { name: 'Dhruv', role: 'Frontend', image: 'https://folder.ddks.live/team-img3.png' },
  {name:'Ayush',role:'Frontend',image:'https://folder.ddks.live/avatar-2.png'},
];

const Team = () => {
  return (
    <div className=" h-full w-full flex flex-wrap items-center justify-center">
      <div className="md:w-[75%] h-full w-full md:h-[60%]">
      <div className="intro h-[35%] w-full">
        <span className="font-semibold">We are ashleel coders</span>
        <div className="text-4xl">We have a <span className=" italic">Talented</span>  Team</div>
        <p>
       "Asleel Coders" is an innovative tech community focused on leveraging cutting-edge programming and software development techniques
        </p>
      </div>
      <div className="team-members h-[65%] flex w-full flex-wrap gap-3 justify-between ">
        {teamMembers.map((member, index) => (
          <div key={index} className="">
            <div className="w-ful flex justify-center"><img src={member.image} height={'100px'} width={'100px'} alt={member.name} /></div>
            <div className="w-full flex flex-wrap justify-center">
            <h3 className="w-full text-center font-bold">{member.name}</h3>
            <p className="w-full text-center font-semibold">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Team;
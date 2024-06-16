import Example from "./Example";
const Question=()=>{
    return(
        <div className="w-full h-screen bg-slate-900 overflow-scroll scrollbar-thumb">
            <div className="border-b-2 border-slate-500 p-5 mx-4">
                <div className=" font-extrabold text-xl">
                    Armstrong Number
                </div>
                <div className="flex justify-start gap-3 pt-4">
                    <span className=" text-fuchsia-400">Easy</span>
                    <span className="text-[#95D9C3]">Accuracy :49.88%</span>
                    <span className="text-[#D1AC00]">Submission:16</span>
                    <span className="text-[#C05746]">Max Score:10</span>
                </div>
            </div>
            <div id="description" className="text-white border-b-2 border-slate-500 p-5 mx-5 text-justify" >
            You are given a 3-digit number n, Find whether it is an Armstrong number or not.

An Armstrong number of three digits is a number such that the sum of the cubes of its digits is equal to the number itself. 371 is an Armstrong number since 3<sup>3</sup> + 7<sup>3</sup> + 1<sup>3</sup> = 371. 

Note: Return <strong>"true"</strong> if it is an Armstrong number else return <strong>"false"</strong>.

            </div>
            <div className="w-full flex flex-wrap gap-6 mt-5">
                <div className="w-full"><Example/></div> 
                <div className="w-full"><Example/></div>  

            </div>
            <div className="border-b-2 border-slate-500 p-5 mx-5 text-white">
                Expected Time Complexity: O(1) <br />
                Expected Space Complexity: O(1)

            </div>

        </div>
    )
}

export default Question;
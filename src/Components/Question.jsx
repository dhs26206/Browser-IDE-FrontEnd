
const Question=()=>{
    return(
        <div className="w-full h-screen bg-slate-900">
            <div className="border-b-2 border-slate-500 p-5">
                <div className=" font-extrabold text-xl">
                    Armstrong Number
                </div>
                <div className="flex justify-start gap-3">
                    <span>Easy</span>
                    <span>Accuracy :49.88%</span>
                    <span>Submission:16</span>
                    <span>Max Score:10</span>
                </div>
            </div>
            <div id="description" className="text-white border-b-2 border-slate-500 p-5" >
            You are given a 3-digit number n, Find whether it is an Armstrong number or not.

An Armstrong number of three digits is a number such that the sum of the cubes of its digits is equal to the number itself. 371 is an Armstrong number since 3<sup>3</sup> + 7<sup>3</sup> + 1<sup>3</sup> = 371. 

Note: Return <strong>"true"</strong> if it is an Armstrong number else return <strong>"false"</strong>.

            </div>
            <div className="border-b-2 border-slate-500 p-5 text-white">
                Expected Time Complexity: O(1)
                Expected Space Complexity: O(1)

            </div>

        </div>
    )
}

export default Question;
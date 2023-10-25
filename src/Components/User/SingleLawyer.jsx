import { Card } from '@material-tailwind/react';

function SingleLawyer() {
    return (
      <>
        <div className="container mx-auto">
          {/* <div className="h-16 flex items-center justify-around "></div> */}
          <div className="grid grid-cols-[26rem,1fr] h-screen m-3">
            <aside className=" rounded  p-4 pb-0 grid grid-rows-[28rem,1fr]">
              <Card className=" bg-brown-800 m-5">
                profile
              </Card>
              <Card className="bg-deep-orange-300 m-5">
                achievments
              </Card>
            </aside>
            <div className="max-h-screen p-4 pb-0 ps-0 grid grid-rows">
              <Card className=" bg-brown-800 m-5 ">
                details
              </Card>
            </div>
          </div>
          <div className='p-4 pt-0 '>
            <Card className=" bg-brown-800 m-5 h-80 ">reviews</Card>
          </div>
        </div>
      </>
    );
}

export default SingleLawyer
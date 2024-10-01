import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="container mx-auto p-4 bg-black">
      <div className="grid grid:cols-1 md:grid-cols-2 gap-5">
        <div className="text-white text-center rounded p-6 flex flex-col items-start justify-center pl-12">
          <h1 className="text-9xl font-extrabold mb-8">Robot</h1>
          <h2 className="text-5xl font-semibold text-left">
            3d model of robot taken from spline.
          </h2>
        </div>
        <div className="text-white text-center rounded p-6 min-h-[93vh]">
          <Spline scene="https://prod.spline.design/KJirFxqrDxR7T4bd/scene.splinecode" />{" "}
          {/* --------> Robot  */}
          {/* <Spline scene="https://prod.spline.design/hDGnQRgC3rE7P7ih/scene.splinecode" /> ------------> Earth */}
          {/* <Spline scene="https://prod.spline.design/06KNNVrNmEGoGml2/scene.splinecode" /> ------------> Earbuds */}
        </div>
      </div>
    </div>
  );
}

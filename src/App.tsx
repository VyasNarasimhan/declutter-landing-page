import github from './assets/github-mark.png';
import tracker from './assets/tracker.png';
import focus from './assets/focus.png';

function App() {
    return (
        <div className="container m-auto py-10 lg:px-36 md:px-10">
            <div className="text-center mb-5">
                <p className="text-3xl font-bold mb-2">Welcome to <span className="text-blue-600">Declutter</span>.</p>
                <p className="text-lg font-light mb-2">The productivity chrome extension designed to make you aware of your browser distractions and help reduce their impact.</p>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Add to Chrome</button>
            </div>
            <div className="grid xl:grid-cols-2 gap-x-24 gap-y-16 lg:p-3 justify-center mb-5">
                <img src={tracker} className="h-auto md:max-w-lg rounded-lg mx-auto xl:ml-auto shadow-xl"/>
                <div className="flex items-center">
                    <div>
                        <p className="text-xl font-semibold mb-1">Locate potential distractions with <span className="text-blue-600">Tracker</span>.</p>
                        <p className="text-base font-light">See how you're using your browser throughout the day and whether any websites are taking too much of your time.</p>
                    </div>
                </div>
                <img src={focus} className="h-auto md:max-w-lg rounded-lg mx-auto xl:ml-auto shadow-xl"/>
                <div className="flex items-center">
                    <div>
                        <p className="text-xl font-semibold mb-1">Temporarily eliminate distractions with <span className="text-blue-600">Focus</span>.</p>
                        <p className="text-base font-light">Specify websites that may distract you and simply press a button to group them so that you are less likely to notice them.</p>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 align-top">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                            <p className="text-base font-light ml-1">Tip: Be as broad or as specific as you want when entering websites.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-2 text-center">
                <div className="flex items-center justify-center">
                    <img src={github} className="h-6 w-6"></img>
                    <a className="text-base font-light underline ml-1" href="https://github.com/VyasNarasimhan/productivity-extension" target="_blank">GitHub</a>
                </div>
                <p className="text-base font-light underline">Created by <a href="https://www.linkedin.com/in/vyas-narasimhan-5a6871209/" target="_blank">Vyas Narasimhan</a></p>
            </div>
        </div>
    );
}

export default App;

function PrivacyPolicy() {
    return (
        <div className="container m-auto">
            <div className="p-10 lg:px-72 xl:px-96">
                <div className="text-center mb-5">
                    <p className="text-3xl font-bold mb-1">Declutter Privacy Policy</p>
                </div>
                <p className="text-xl font-semibold mb-2">Your privacy is very important to us. 
                That's why we want to be completely transparent as to what data we are collecting and how we are using it.</p>
                <p className="text-base mb-2"><span className="underline">Tracked websites</span>: Declutter tracks the websites you visit throughout the day. 
                The data that is collected regarding each website consists of the website's URL, icon, and the time spent on it, all of which are displayed on the extension.
                This data is deleted at the end of each day.</p>
                <p className="text-base mb-2"><span className="underline">Current Tab</span>: Part of determing the time spent on each website requires the temporary storage of the current tab that the user is on.
                While this storage value is updated every time the user changes the tab, timestamps relating to when the user navigated to that tab are not persisted into local storage. Furthermore, like the tracked website data, it is deleted at the end of each day.</p>
                <p className="text-base mb-2">We collect all data fairly and lawfully. Any data we collect is not sent, transmitted, or provided to anyone else, nor can it be accessed by anyone else.
                Please note that installing the extension implies that you accept the aforementioned data being collected and used as described above.</p>
                <p className="text-base mb-2">If you have any questions or concerns, feel free to email the developer at <a href="mailto:vyasnarasimhan03@gmail.com" className="text-blue-600 hover:underline">vyasnarasimhan03@gmail.com</a>.</p>
                <p className="text-base mb-2 text-center">Last updated: January 21, 2023</p>
                <p className="text-center"><a href="/" className="text-base text-blue-600 underline mb-1">Return to home</a></p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center w-full">
                    <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400 space-x-4">
                        <li>
                            <a href="#" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a href="#" className="hover:underline">
                    GreenWebby
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>

    )
}

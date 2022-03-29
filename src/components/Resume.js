import React from 'react';
import "./Resume.css";
import Navbar from "./Navbar.js"
export default function Resume() {
  return (
    <div>
        <Navbar title="Resume" aboutText="Resume" />
            <body id="resume">
                <title>ALOKPATEL resume</title>

                <header id="header">
                    {/* <!-- resume header with your name and title --> */}
                    <h1><b>ALOK</b> PATEL</h1>
                    <hr/>
                    <h3>PYTHON DEVELOPER</h3>
                    <hr/>
                </header>
                <main>
                    <article id="mainLeft">
                        <section>
                            <h2>CONTACT</h2>

                            {/* <!-- contact info including social media --> */}
                            <p>
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                +91 7897867722
                            </p><p>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <a href="mailto:alokpatel885@gmail.com">alokpatel885@gmail.com</a>
                            </p>
                            <p>
                                <i className="fab fa-github" aria-hidden="true"></i>
                                <a href="https://www.github.com/alokknight">alokknight</a>
                            </p>
                            <p>
                                <i className="fab fa-linkedin" aria-hidden="true"></i>
                                <a href="https://www/linkedin.com/in/alokknight">alokknight</a>
                            </p>
                        </section>
                        <section>
                            <h2>CODING PROFILES</h2>
                            <p>
                                <i className="fab fa-hackerrank" aria-hidden="true"></i>
                                <a href="https://www.hackerrank.com/alokknight">alokknight</a>
                            </p>
                            <p>
                                <i className="fab fa-leetcode" aria-hidden="true"></i>
                                <a href="https://www.leetcode.com/alokknight">alokknight</a>

                            </p>
                            <p>
                                <i className="fab fa-gfg" aria-hidden="true"></i>
                                <a href="https://www.geeksforgeeks.com/user/alokknight">alokknight</a>
                            </p>
                        </section>
                        <section>
                            <h2>EDUCATION</h2>
                            {/* <!-- your education --> */}
                            <b>JKGPSVM INTER COLLEGE</b>

                            <p>LAHARPUR, SITAPUR <i>(UP BOARD)</i></p>
                            <p>
                                <p>2017 May | 12th | 90.4%</p>
                                <p>2015 May | 10th | 87.5%</p>
                            </p>

                            {/* <!-- your education --> */}
                            <b>MMMUT, GORAKHPUR</b>
                            <p>
                                <p>B.Tech. in CS | CGPA: 7.16</p>
                                <p>2018-2022 | Gorakhpur, India</p>
                            </p>
                        </section>
                        <section>
                            <h2>SKILLS</h2>
                            {/* <!-- your skills AKA "buzzwords" --> */}
                            <p>
                                <b>LANGUAGES</b>
                                <p>PYTHON, C/C++, JAVA</p>
                            </p>
                            <p>
                                <b>WEB DEVELOPMENT</b>
                                <p><b>Frontend :-</b>HTML, CSS, BOOTSTRAP, REACT, JS</p>
                                <p><b>Backend :-</b>DJANGO, DRF</p>
                            </p>
                            <p>
                                <b>DATABASES</b>
                                <p>MYSQL, MONGODB</p>
                            </p>
                            <p>
                                <b>VERSION CONTROL</b>
                                <p> GIT, GitHUB, HEROKU</p>
                            </p>


                        </section>

                    </article>

                    <article id="mainRight">
                        <section>
                            <h2>ABOUT</h2>
                            {/* <!-- about you --> */}
                            <p>Hi, I’m ALOK.</p>
                            <p>I’m up for SDE, Python Developer (Full Stack).</p>
                            <p>I need a challenging role at a reputed IT organization to utilize my development and problem-solving</p>
                            <p>skills that can contribute to the company’s growth as well
                            as enhance my knowledge by exploring new things.</p>

                        </section>

                        <section>
                            <h2>PROJECTS</h2>
                            {/* <!-- your work experience --> */}
                                <b>Dynamic Website </b>| Live 🔗🔗 Nov 2021 - Present
                                <p>
                                        <b>Goal:</b>To develop a freelancing website from scratch with backend and third-party
                                        authentication where everyone can register himself and make their portfolio using
                                        Portfolio module and learn new skills using Tutorial module and add his projects
                                        details & links in Project module to get freelance work.
                                </p>
                                <ul>
                                        ● Developed reusable modules- Blog, Account, Contact, Objective-questions.
                                        ● Only Authorized person can perform CRUD using Forms.
                                        <li><b>Tech Used:</b> DJANGO, MongoDB Atlas, HTML/CSS, JS, BOOSTRAP</li>
                                </ul>
                                        <b>Whisky Quality Prediction </b>| CODE | Live 🔗🔗 July 2020 – Aug 2020
                                <p>
                                        <b>Goal:</b> To develop a model which can predict the quality of whisky the basis of its
                                        contains and deploy it on Heroku.
                                </p>
                                <ul>
                                        <li><b>Tech Used:</b> ML, DJANGO, DJANGO REST FRAMEWORK, React,
                                        HTML/CSS, JS</li>
                                </ul>


                                <b>Car Price Prediction </b>| CODE | Live 🔗🔗 Apr 2019 – May 2019

                                <p>
                                        <b>Goal:</b> To develop a model which can predict the price of an old vehicle (car) on
                                        the basis of its age, previous owner count, kilometer driven, year, fuel type &
                                        current showroom price etc.
                                </p>
                                <ul>

                                        <li><b>Tech Used:</b> ML, DJANGO, HTML/CSS, BOOSTRAP</li>
                                </ul>

                                <b>Hostel Management System </b>| Code 🔗🔗 Oct 2018 – Dec 2018
                                <p>
                                        <b>Goal:</b> To create a system where an admin (hostel manager) has permission to
                                        add, remove and delete the details of students using his password.
                                </p>
                                <ul>

                                        <li>Students can only view their details using their common password.</li>
                                        <li><b>Tech Used:</b> C++, OPPs.</li>
                                </ul>
                        </section>
                    </article>
                </main>
                </body>
    </div>
  )
}



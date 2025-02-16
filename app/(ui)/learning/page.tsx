"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaBookOpen, FaCode, FaLaptopCode, FaBrain } from "react-icons/fa";

const semesters = [
  {
    year: 1,
    semesters: [
      {
        number: 1,
        subjects: [
          { name: "Introduction to Programming", credits: 3 },
          { name: "Calculus I", credits: 3 },
          { name: "Digital Logic", credits: 3 },
          { name: "English for Academic Purposes", credits: 2 },
        ],
      },
      {
        number: 2,
        subjects: [
          { name: "Object Oriented Programming", credits: 3 },
          { name: "Calculus II", credits: 3 },
          { name: "Computer Organization", credits: 3 },
          { name: "Technical Writing", credits: 2 },
        ],
      },
    ],
  },
  {
    year: 2,
    semesters: [
      {
        number: 3,
        subjects: [
          { name: "Data Structures", credits: 3 },
          { name: "Linear Algebra", credits: 3 },
          { name: "Database Systems", credits: 3 },
          { name: "Web Programming", credits: 3 },
        ],
      },
      {
        number: 4,
        subjects: [
          { name: "Algorithms", credits: 3 },
          { name: "Operating Systems", credits: 3 },
          { name: "Software Engineering", credits: 3 },
          { name: "Computer Networks", credits: 3 },
        ],
      },
    ],
  },
  {
    year: 3,
    semesters: [
      {
        number: 5,
        subjects: [
          { name: "Artificial Intelligence", credits: 3 },
          { name: "Mobile Development", credits: 3 },
          { name: "Information Security", credits: 3 },
          { name: "Cloud Computing", credits: 3 },
        ],
      },
      {
        number: 6,
        subjects: [
          { name: "Machine Learning", credits: 3 },
          { name: "Distributed Systems", credits: 3 },
          { name: "Software Testing", credits: 3 },
          { name: "Tech Elective I", credits: 3 },
        ],
      },
    ],
  },
  {
    year: 4,
    semesters: [
      {
        number: 7,
        subjects: [
          { name: "Final Project I", credits: 4 },
          { name: "Data Science", credits: 3 },
          { name: "Tech Elective II", credits: 3 },
          { name: "Professional Ethics", credits: 2 },
        ],
      },
      {
        number: 8,
        subjects: [
          { name: "Final Project II", credits: 4 },
          { name: "Tech Entrepreneurship", credits: 3 },
          { name: "Tech Elective III", credits: 3 },
          { name: "Career Development", credits: 2 },
        ],
      },
    ],
  },
];

export default function LearningPath() {
  const [activeYear, setActiveYear] = useState(1);

  const yearIcons = {
    1: FaBookOpen,
    2: FaCode,
    3: FaLaptopCode,
    4: FaBrain,
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-black py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-4 text-center">
              Learning Journey
            </h1>
            <p className="text-xl text-blue-200 text-center max-w-2xl mx-auto">
              Your path to becoming a Computer Science Professional
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Year Selection */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((year) => {
            const Icon = yearIcons[year as keyof typeof yearIcons];
            return (
              <motion.button
                key={year}
                className={`p-6 rounded-xl ${
                  activeYear === year
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-900 text-zinc-400"
                } transition-all duration-300 hover:bg-blue-600/80 hover:text-white group`}
                onClick={() => setActiveYear(year)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-8 h-8 mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-center">
                  Year {year}
                </h3>
                <div className="mt-2 h-1 bg-blue-400/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      activeYear === year ? "bg-blue-400" : "bg-transparent"
                    } transition-all duration-500`}
                    style={{ width: "100%" }}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Semester Content */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {semesters[activeYear - 1].semesters.map((semester) => (
            <motion.div
              key={semester.number}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6 border-b border-zinc-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Semester {semester.number}
                  </h3>
                  <span className="px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm">
                    {semester.subjects.reduce(
                      (acc, curr) => acc + curr.credits,
                      0
                    )}{" "}
                    Credits
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                {semester.subjects.map((subject, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex items-center justify-between p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-zinc-200 group-hover:text-white transition-colors">
                        {subject.name}
                      </span>
                    </div>
                    <span className="text-blue-400 text-sm font-medium">
                      {subject.credits} CR
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-zinc-400 mb-2">Current Progress</h4>
              <p className="text-3xl font-bold text-blue-400">
                Year {activeYear}
              </p>
            </div>
            <div>
              <h4 className="text-zinc-400 mb-2">Total Credits</h4>
              <p className="text-3xl font-bold text-blue-400">
                {semesters.reduce(
                  (acc, year) =>
                    acc +
                    year.semesters.reduce(
                      (semAcc, sem) =>
                        semAcc +
                        sem.subjects.reduce(
                          (subAcc, sub) => subAcc + sub.credits,
                          0
                        ),
                      0
                    ),
                  0
                )}
              </p>
            </div>
            <div>
              <h4 className="text-zinc-400 mb-2">Program Duration</h4>
              <p className="text-3xl font-bold text-blue-400">4 Years</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

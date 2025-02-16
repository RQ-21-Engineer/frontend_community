"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Member } from "@/data/members";
import { slugify } from "@/data/members";

const transformStyles = [
  { origin: "origin-center", translate: "translate-y-2 rotate-2" },
  {
    origin: "origin-top-left",
    translate: "-translate-y-1 translate-x-2 -rotate-1",
  },
  { origin: "origin-bottom", translate: "translate-y-4 rotate-3" },
  {
    origin: "origin-top-right",
    translate: "-translate-x-2 translate-y-3 -rotate-2",
  },
  {
    origin: "origin-bottom-left",
    translate: "translate-x-3 -translate-y-2 rotate-1",
  },
  {
    origin: "origin-center",
    translate: "-translate-y-3 -translate-x-1 -rotate-3",
  },
];

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const url = searchTerm
          ? `/api/members?search=${encodeURIComponent(searchTerm)}`
          : "/api/members";
        const res = await fetch(url);
        const data = await res.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    const timeoutId = setTimeout(fetchMembers, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const cardStyles = useMemo(
    () =>
      Array(members.length)
        .fill(null)
        .map(
          () =>
            transformStyles[Math.floor(Math.random() * transformStyles.length)]
        ),
    [members.length]
  );

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Students
          </h1>
          <p className="text-zinc-300 mb-8">Meet our talented classmates</p>
          <input
            type="text"
            placeholder="Search by name or major..."
            className="w-full max-w-md px-4 py-3 rounded-full border border-zinc-800 bg-zinc-900 text-white placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {members.map((member, index) => {
            const currentTransform = cardStyles[index];
            const transformValues = {
              translateY: currentTransform.translate.includes("translate-y-2")
                ? 8
                : currentTransform.translate.includes("-translate-y")
                ? -8
                : 0,
              translateX: currentTransform.translate.includes("translate-x-2")
                ? 8
                : currentTransform.translate.includes("-translate-x")
                ? -8
                : 0,
              rotate: currentTransform.translate.includes("rotate-2")
                ? 2
                : currentTransform.translate.includes("-rotate")
                ? -2
                : 0,
            };

            return (
              <motion.div
                key={member.id}
                className="group"
                initial={transformValues}
                whileHover={{
                  ...transformValues,
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <Link href={`/members/${slugify(member.name)}`}>
                  <div className="bg-zinc-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-zinc-800">
                    <div className="relative">
                      <div className="aspect-w-1 aspect-h-1">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-3">
                      <h3 className="text-base font-semibold mb-1 truncate text-white">
                        {member.name}
                      </h3>
                      <p className="text-zinc-400 text-sm mb-2 truncate">
                        {member.role}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 2).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-zinc-800 text-blue-400 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 2 && (
                          <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full text-xs">
                            +{member.skills.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

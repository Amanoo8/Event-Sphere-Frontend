import FeaturedCarousel from "@/components/FeaturedCarousel";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  ArrowBigRight,
  ArrowRight,
  Briefcase,
  ChevronRight,
  Compass,
  Cpu,
  Flame,
  GraduationCap,
  MapPin,
  Music,
  Palette,
  Sparkles,
  Tag,
  Trophy,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function getCategoryIconComponent(category) {
  const icon = category?.icon || "";

  if (icon === "palette") {
    return Palette;
  }

  if (icon === "briefcase") {
    return Briefcase;
  }

  if (icon === "graduation-cap") {
    return GraduationCap;
  }

  if (icon === "music") {
    return Music;
  }
  if (icon === "cpu") {
    return Cpu;
  }

  if (icon === "trophy") {
    return Trophy;
  }
  return Tag;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [trendingEvents, setTrendingEvents] = useState([]);

  useEffect(() => {
    async function loadHomePage() {
      setIsLoading(true);
      try {
        let {
          data: { data },
        } = await axios.get(
          "https://eventsphere-server-mfdb.onrender.com/api/events/featured",
        );
        setFeaturedEvents(data);
      } catch (error) {}

      try {
        let {
          data: { data },
        } = await axios.get(
          "https://eventsphere-server-mfdb.onrender.com/api/categories",
        );
        setCategories(data);
      } catch (error) {}

      try {
        let {
          data: { data },
        } = await axios.get(
          "https://eventsphere-server-mfdb.onrender.com/api/events?limit=8&sort=startDate&order=asc",
        );
        setTrendingEvents(data);
      } catch (error) {}

      setIsLoading(false);
    }
    loadHomePage();
  }, []);
  return (
    <div className="space-y-16 pb-20">
      <section className="relative pt-12 pb-6 sm:pt-16 sm:pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-10 border-b border-[#EBE8DF]">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/70 text-[#C2410C] border border-orange-200">
              <Sparkles className="w-3.5 h-3.5" /> India's Curated Community
              Conclaves
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111] leading-[1.08]">
              Extraordinary gatherings for curious minds.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Discover verified developer summits, acoustic indie evenings,
              founder pitch conclaves, and art retreats across Bengaluru,
              Mumbai, and Delhi NCR.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <Link to="/explore">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-elevated gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Explore 40+ Gatherings</span>
              </Button>
            </Link>
            <Link to="/create-event">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Host an Event
              </Button>
            </Link>
          </div>
        </div>
      </section>
       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#E65100]" />
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">
              Curated Spotlight
            </h2>
          </div>
          <Link
            to="/explore"
            className="text-xs font-semibold text-[#E65100] hover:underline flex items-center gap-1"
          >
            Browse all <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {isLoading ? (
          <div className="aspect-21/9 rounded-3xl bg-[#EBE8DF]/50 animate-pulse"></div>
        ) : (
          <FeaturedCarousel events={featuredEvents} />
        )}
      </section>
       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div>
          <h2 className="text-xl font-bold text-stone-900 tracking-tight">Browse by Discipline</h2>
          <p className="text-xs text-stone-500">Curated tracks dynamically fetched from our active community listings</p>
        </div>

         {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-[#EBE8DF] animate-pulse space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-stone-100" />
                <div className="space-y-1.5">
                  <div className="h-3.5 bg-stone-100 rounded w-3/4" />
                  <div className="h-2.5 bg-stone-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) :(<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">          
          {categories.map((category)=>{
             const Icon = getCategoryIconComponent(category);
            return(
            <Link
            key={category._id}
            to="/explore"
            className="p-4 rounded-2xl bg-white border border-[#EBE8DF] hover:border-[#D5D0C2] hover:shadow-subtle transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-3 transition-all duration-200 bg-orange-50 text-[#E65100] border-orange-200 group-hover:bg-[#E65100] group-hover:text-white text-lg">
              <Icon/>
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900 leading-snug group-hover:text-[#E65100] transition-colors">
                {category.name}
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">{category.eventCount} events</p>
            </div>
          </Link>
          )})}
        </div>)}
      </section>
    </div>
  );
}
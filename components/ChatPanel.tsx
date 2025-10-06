// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Accordion } from "./Accordion";
import { Operation } from "./Operation";
import { UserMsg } from "./UserMsg";

type Content = {
  type: "text" | "operation" | "markdown";
  text: string;
  operationType?: string;
  render?: {
    type: string;
    content: unknown;
  };
};

type Section = {
  role: "user" | "system";
  title?: string;
  content: Content[];
};

const data: Section[] = [
  {
    role: "user",
    content: [
      {
        type: "text",
        text: `I need a 7-day Japan itinerary for April 15-23 from Seattle, with a $2500-5000 budget for my fiancée and me. We love historical sites, hidden gems, and Japanese culture (kendo, tea ceremonies, Zen meditation). We want to see Nara's deer and explore cities on foot. I plan to propose during this trip and need a special location recommendation. Please provide a detailed itinerary and a simple HTML travel handbook with maps, attraction descriptions, essential Japanese phrases, and travel tips we can reference throughout our journey.`,
      },
    ],
  },
  {
    role: "system",
    content: [
      {
        type: "markdown",
        text: `I'll help you create a 7-day Japan itinerary for your trip with your fiancée from April 15-23, including a special location for your proposal. I'll research historical sites, hidden gems, and cultural experiences like kendo, tea ceremonies, and Zen meditation, as well as plan for Nara's deer park visit. I'll also create a detailed HTML travel handbook with maps, attraction descriptions, essential Japanese phrases, and travel tips. Let me get started on this right away!`,
      },
    ],
  },
  {
    role: "system",
    title: "Research Japan travel basics and entry requirements",
    content: [
      {
        type: "operation",
        operationType: "Executing command",
        text: "mkdir -p japan_trip && cd japan_trip && touch todo.md",
        render: {
          type: "markdown",
          content:
            "```bash\n" +
            "ubuntu@sandbox:~ $ cd /home/ubuntu && mkdir -p japan_trip && cd japan_trip && touch todo.md\n\n" +
            "ubuntu@sandbox:~/japan_trip $\n" +
            "```",
        },
      },
    ],
  },
  {
    role: "system",
    title: "Create comprehensive travel preparation checklist",
    content: [
      {
        type: "text",
        text: "Creating a todo checklist to organize the Japan trip planning process.",
      },
      {
        type: "operation",
        operationType: "Creating file",
        text: "japan_trip/todo.md",
        render: {
          type: "markdown",
          content: `
          # Japan Trip Planning Checklist

          ## Research Japan Travel Basics
          - [x] Create project directory structure
          - [ ] Research best transportation options (JR Pass, local transit)
          - [ ] Research weather in April
          - [ ] Check visa requirements for US citizens
          - [ ] Research currency exchange and budget allocation
          - [ ] Check flight options from Seattle to Japan

          ## Research Cities and Attractions
          - [ ] Research Tokyo attractions and activities
          - [ ] Research Kyoto historical sites and cultural experiences
          - [ ] Research Nara deer park and surrounding attractions
          - [ ] Research Osaka food and cultural experiences
          - [ ] Identify hidden gems and off-the-beaten-path locations
          - [ ] Research cultural experiences (kendo, tea ceremonies, Zen meditation)

          ## Plan 7-Day Itinerary
          - [ ] Create day-by-day itinerary with timing
          - [ ] Plan transportation between cities
          - [ ] Balance city exploration with cultural experiences
          - [ ] Include time for relaxation and spontaneous exploration
          - [ ] Ensure itinerary fits within budget constraints ($2500-5000)

          ## Research Proposal Locations
          - [ ] Identify scenic and romantic locations for proposal
          - [ ] Research best time of day for proposal at chosen locations
          - [ ] Plan logistics for the proposal moment

          ## Compile Japanese Phrases and Travel Tips
          - [ ] Create list of essential Japanese phrases
          - [ ] Compile cultural etiquette tips
          - [ ] Research dining customs and food recommendations
          - [ ] Compile safety and emergency information

          ## Create HTML Travel Handbook
          - [ ] Design structure for HTML handbook
          - [ ] Create maps section with key locations
          - [ ] Write attraction descriptions
          - [ ] Include Japanese phrases section
          - [ ] Add travel tips section
          - [ ] Ensure mobile-friendly design

          ## Finalize and Deliver Documents
          - [ ] Review and finalize 7-day itinerary
          - [ ] Test HTML handbook functionality
          - [ ] Compile all documents and resources
          - [ ] Deliver final package to user
          `,
        },
      },
    ],
  },
  {
    role: "system",
    title: "Research cities and attractions matching traveler's interests",
    content: [
      {
        type: "text",
        text: "Researching Japanese cities and attractions that match the couple's interests in historical sites, cultural experiences, and hidden gems.",
      },
      {
        type: "operation",
        operationType: "Searching",
        text: "Japan travel basics JR Pass transportation April",
        render: {
          type: "search",
          content: [
            {
              title:
                "Need Advice on Travel Pass and Transport for Japan Trip in April",
              description:
                "Your travel barely breaks even if using a 7 day JR pass, but you'll need the much more expensive 21 day pass to encompass your trips. The JR ...",
              href: "https://www.reddit.com/r/JapanTravelTips/comments/1j1fgf7/need_advice_on_travel_pass_and_transport_for/",
            },
            {
              title: "Japan Rail Pass | Guide | Travel Japan",
              description:
                "The Japan Rail Pass gives you access to JR train lines countrywide, with very few exceptions. With your pass, you can take unlimited rides on most shinkansen.",
              href: "https://www.japan.travel/en/guide/jr-rail-pass/",
            },
            {
              title: "Is the Japan Rail Pass Worth it? Complete Guide (2025)",
              description:
                "The Japan Rail Pass is a physical train pass, only available for tourists, that offers unlimited rides on (most) trains across Japan, including the shinkansen ...",
              href: "https://the-shooting-star.com/japan-rail-pass-train-travel-japan/",
            },
            {
              title: "Japan Rail Pass (JR Pass) - Japan Guide",
              description:
                "The pass can be used only by foreign tourists and offers unlimited rides on JR trains for one, two or three weeks. It comes in two types: ordinary and green ...",
              href: "https://www.japan-guide.com/e/e2361.html",
            },
            {
              title:
                "How to Get Around Japan: A Japan Rail Travel Guide - Bon Traveler",
              description:
                "The Japan Rail Pass is a train pass that covers a range of shinkansen (bullet train) travel and JR train lines, as well as a few other modes of transport, such ...",
              href: "https://www.bontraveler.com/getting-around-japan/",
            },
          ],
        },
      },
      {
        type: "text",
        text: "Researching transportation options and attractions in Japan for the April trip itinerary.",
      },
      {
        type: "operation",
        operationType: "Browsing",
        text: "https://www.japan-guide.com/e/e2361.html",
        render: {
          type: "browsing",
          content: "https://private-us-east-1.manuscdn.com/sessionFile/brWKUSp51ItvVMBpcXNCZ1/browserScreenshots/OZWMeN6yKyIuwhP2cwq9Ma_1740987212421_na1fn_Y2xlYW4.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnJXS1VTcDUxSXR2Vk1CcGNYTkNaMS9icm93c2VyU2NyZWVuc2hvdHMvT1pXTWVONnlLeUl1d2hQMmN3cTlNYV8xNzQwOTg3MjEyNDIxX25hMWZuX1kyeGxZVzQud2VicCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2NzIyNTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nscldSiae1Vu6IaNQeriMMpf5qwnWl~xUFxm9kC4u8Xk2QphSP1PjVFHCVM8qf7mCBQwhhMCpx5Ik7glPFK-EjQnSLZy8WPsLvcucxKax8t6DE0DT2l0IvdtL00ebpPhuFlbZYmtxP8NmbWKMiuE5nDoViocp4GknnKXDuNKLUZUP~lWvSvVw~CMMNZWeHm4oBxk-pGUXHR6G6fxWSBcv9Vtvi6Vxn74r7bIXn9SOJwF6tVpRq96LrmNYLw4UfifuLxxHjE9ejW2jcJ-A01AfXpgWMXHK6puNHnIMSGRf05dohT39O3oZeCCtTo3nR~4l41ot7m1pwnLB301YEAHgA__"
        }
      },
      {
        type: "operation",
        operationType: "Scrolling down",
        text: "",
        render: {
          type: "browsing",
          content: "https://private-us-east-1.manuscdn.com/sessionFile/brWKUSp51ItvVMBpcXNCZ1/browserScreenshots/zc2TxVoMxiJE84ANfZpzlS_1740987226259_na1fn_Y2xlYW4.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnJXS1VTcDUxSXR2Vk1CcGNYTkNaMS9icm93c2VyU2NyZWVuc2hvdHMvemMyVHhWb014aUpFODRBTmZacHpsU18xNzQwOTg3MjI2MjU5X25hMWZuX1kyeGxZVzQud2VicCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2NzIyNTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YusTxxfK2YfEK7z0J3aa-U8YqqL5g-LkZnOcXGGIE9WLmObynEvKrJS9frcV~-kELpFmH8tpDBCyYUYzNcSkc9Z~9ceh7apwZeQIOjFeTXRVgyl1o2T9~1kWSLul0HC-Z6PhtwTbyQ5vnh9xg5HcxAp9xlkfmF9-u1JaC4uJgpVhzF1clpdvkdacamGce5hVHpBuAV4RWGR71b7O5bRUjIK1H97iClJrV4DRlYKfk1O1NZ000GLoSW2z~gc~ZHDmYK1YMQhWduoQKcJgLND9wih3URyet0JIK0XzyRyRQjnp6SaFqlk4OJqp1MNBGZxZCBOhN6LMycRccOup2J~t2A__"
        }
      },
      {
        type: "operation",
        operationType: "Searching",
        text: "Japan historical sites Kyoto Tokyo Nara April",
        render: {
          type: "search",
          content: [
            {
              title:
                "March & April visit to Tokyo/Kyoto/Osaka with stops in Nara ... - Reddit",
              description:
                "March & April visit to Tokyo/Kyoto/Osaka with stops in Nara, Hiroshima, and Haneda. Is this too much? · Land at 5:30 am in Haneda and take the ...",
              href: "https://www.reddit.com/r/JapanTravel/comments/16dtgsl/march_april_visit_to_tokyokyotoosaka_with_stops/",
            },
            {
              title:
                "One Week in Japan Itinerary: Kyoto, Tokyo, Nara, Mt. Fuji",
              description:
                "This one week itinerary is perfect for travelers visiting Japan for the first time. It hits the top, must-see destinations in both Kyoto and Tokyo including ...",
              href: "https://adventureswithpinny.com/blog/one-week-in-japan-itinerary",
            },
          ],
        },
      },
      {
        type: "text",
        text: "Researching historical sites and attractions in Kyoto, Tokyo, and Nara for the April trip itinerary.",
      },
      {
        type: "operation",
        operationType: "Browsing",
        text: "https://www.tripadvisor.com/Attractions-g298198-Activities-c47-t17-Nara_Nara_Prefecture_Kinki.html",
        render: {
          type: "browsing",
          content: "https://private-us-east-1.manuscdn.com/sessionFile/brWKUSp51ItvVMBpcXNCZ1/browserScreenshots/3pAcwvmqyVt9wkhx9Cdt2K_1740987246629_na1fn_Y2xlYW4.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvYnJXS1VTcDUxSXR2Vk1CcGNYTkNaMS9icm93c2VyU2NyZWVuc2hvdHMvM3BBY3d2bXF5VnQ5d2toeDlDZHQyS18xNzQwOTg3MjQ2NjI5X25hMWZuX1kyeGxZVzQud2VicCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2NzIyNTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nM~IxyfzVihVVdxB-W4kJzE4E~80qiW7DP7IH-EshDBjoZQwWE-ganAMWjH2UlJ~PZfvSFn0fYNsGF0ueBr9ZEKxtz-Q9FWS6WrNmfPJFMGuIz6Oo3XTkfeLl8CThxCzdARCkX~eA2nkZuy2-dwz0ug3U~tA6s1COVOZPVxlo7ZdKhn8rr6fq0dYZWk6qIYe9ir6xi5NNnqkwzN00eSQAf-7Iiir~R8nvFkQefGmCNbKDRec5txddCNil3OtZxkdbqeBgXaaGPFInD3xR8~PiO70fL7iNfAPiNRjbdWhkrUs3UQhp7iq~hZp55iz7jsXdQ-aJ8jpNg6-wtNznXS69Q__"
        }
      },
      {
        type: "text",
        text: "Researching historical sites and attractions in Japan while navigating around website access challenges.",
      },
    ],
  },
  {
    role: "system",
    title: "Create a detailed itinerary for the trip",
    content: [
      {
        type: "text",
        text: "Creating a detailed itinerary for the trip, including travel dates, locations, and activities.",
      },
      {
        type: "operation",
        operationType: "Creating file",
        text: "japan_trip/itinerary.md",
        render: {
          type: "markdown",
          content: `
          
            # 7-Day Japan Itinerary (April 15-23, 2025)
          ## Overview
          This itinerary is designed for a couple traveling from Seattle to Japan in April, focusing on historical sites, cultural experiences, and hidden gems. The plan includes Tokyo, Kyoto, and Nara, with opportunities to experience kendo, tea ceremonies, and Zen meditation. A special romantic proposal location is included during cherry blossom season.

          ## Day 1 (April 15): Arrival in Tokyo
          - **Morning**: Arrive at Narita/Haneda Airport
          - **Afternoon**: 
            - Check into hotel in Tokyo
            - Exchange JR Pass voucher at airport JR office
            - Light exploration of hotel neighborhood
          - **Evening**: 
            - Dinner at local restaurant near accommodation
            - Early night to recover from jet lag

          ## Day 2 (April 16): Tokyo Exploration - Modern & Traditional
          - **Morning**: 
            - Visit Meiji Shrine and Yoyogi Park (peaceful forest walk)
            - Explore Harajuku and Takeshita Street
          - **Afternoon**: 
            - Shibuya Crossing and Shibuya Sky observation deck
            - Shopping in Shibuya
          - **Evening**: 
            - Dinner in Harmonica Yokocho (hidden gem in Kichijoji)
            - Explore this former black market area with small izakayas and shops

          ## Day 3 (April 17): Tokyo Hidden Gems & Cultural Experience
          - **Morning**: 
            - Visit Gotokuji Temple (home of the beckoning cat figurines)
            - Explore Shimokitazawa neighborhood (trendy area with vintage shops)
          - **Afternoon**: 
            - **Proposal Opportunity**: Chidorigafuchi Park for cherry blossom viewing and boat ride
            - Stroll along the Imperial Palace East Gardens
          - **Evening**: 
            - Dinner at Ebisu Yokocho food alley
            - Optional: Tokyo Tower night view

          ## Day 4 (April 18): Travel to Kyoto & First Impressions
          - **Morning**: 
            - Shinkansen from Tokyo to Kyoto (2-2.5 hours)
            - Check into Kyoto accommodation
          - **Afternoon**: 
            - Visit Fushimi Inari Shrine (thousand torii gates)
            - Explore southern Higashiyama district
          - **Evening**: 
            - Dinner in Pontocho Alley
            - Evening stroll along Kamogawa River

          ## Day 5 (April 19): Kyoto Cultural Immersion
          - **Morning**: 
            - Tea Ceremony experience at WAK JAPAN or Toyokuni Shrine
            - Zen Meditation session at a local temple
          - **Afternoon**: 
            - Kendo experience through WAK JAPAN
            - Visit Kinkaku-ji (Golden Pavilion)
          - **Evening**: 
            - **Proposal Opportunity**: Maruyama Park during evening cherry blossom illumination
            - Dinner at traditional Kyoto restaurant

          ## Day 6 (April 20): Nara Day Trip
          - **Morning**: 
            - Train from Kyoto to Nara (30-45 minutes)
          - **Full Day in Nara**: 
            - Nara Park and friendly deer
            - Todai-ji Temple and Great Buddha
            - Kofukuji Temple and five-story pagoda
            - Kasuga Taisha Shrine
          - **Evening**: 
            - Return to Kyoto
            - Dinner in Gion district
            - Possible geisha spotting in Gion

          ## Day 7 (April 21): Arashiyama & Northern Kyoto
          - **Morning**: 
            - Visit Arashiyama Bamboo Grove (early to avoid crowds)
            - Tenryu-ji Temple and gardens
            - Monkey Park Iwatayama
          - **Afternoon**: 
            - **Proposal Opportunity**: Romantic boat ride on the Hozugawa River
            - Visit Ryoan-ji Temple (famous rock garden)
          - **Evening**: 
            - Farewell dinner at upscale restaurant
            - Final night in Kyoto

          ## Day 8 (April 22): Return to Tokyo & Departure Preparation
          - **Morning**: 
            - Shinkansen from Kyoto to Tokyo
            - Last-minute shopping in Tokyo
          - **Afternoon**: 
            - Visit any missed Tokyo attractions
            - Pack and prepare for departure
          - **Evening**: 
            - Final dinner in Tokyo

          ## Day 9 (April 23): Departure
          - **Morning/Afternoon**: 
            - Transfer to Narita/Haneda Airport
            - Departure flight to Seattle

          ## Proposal Location Recommendations
          1. **Chidorigafuchi Park (Tokyo)**: Romantic boat ride surrounded by cherry blossoms
          2. **Maruyama Park (Kyoto)**: Famous for its weeping cherry trees, especially beautiful during evening illumination
          3. **Hozugawa River (Arashiyama)**: Scenic boat ride through beautiful natural landscapes

          ## Transportation Notes
          - Activate 7-day JR Pass on April 17 (Day 3) to maximize usage for long-distance travel
          - Use local transit in Tokyo for first two days
          - JR Pass will cover:
            - Tokyo to Kyoto shinkansen
            - Kyoto to Nara round trip
            - Kyoto to Tokyo return journey
          - Consider purchasing IC card (Suica/Pasmo) for local transit in cities
          
          `
        }
      },
    ],
  },
  {
    role: "system",
    title: "Plan a special location for the proposal",
    content: [
      {
        type: "markdown",
        text: `I've encountered a CAPTCHA verification on TripAdvisor while researching Nara's historical sites. This is a security measure that requires human interaction. Would you like me to:
- Try alternative travel websites for information about historical sites in Japan
- Focus on official tourism websites for Kyoto, Tokyo, and Nara
- Continue with the research using different search queries

I'll continue working on your Japan itinerary and travel handbook regardless of your choice.`,
      },
    ],
  },
];

const THINKING_TEXTS = ["Thinking...", "Analysing...", "Searching..."];
const THINK_DELAY = 250;
const SHOW_DELAY = 80;

interface ChatPanelProps {
  onOpClick: (op: unknown) => void;
}

export const ChatPanel = ({ onOpClick }: ChatPanelProps) => {
  const [section, setSection] = useState(0);
  const [msgCount, setMsgCount] = useState(0);
  const [thinking, setThinking] = useState(true);
  const [thinkText, setThinkText] = useState("");
  const [operations, setOperations] = useState<Content[]>([]);
  const bottomRef = React.useRef<HTMLSpanElement>(null);


  useEffect(() => {
    if (section >= data.length) return;
    const messages = data[section].content;

    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }

    if (thinking) {
      setThinkText(
        THINKING_TEXTS[Math.floor(Math.random() * THINKING_TEXTS.length)]
      );
      const t = setTimeout(() => {
        setThinking(false);
        if (msgCount < messages.length) {
          setMsgCount((c) => c + 1);
        } else {
          setSection((s) => s + 1);
          setMsgCount(0);
        }
      }, THINK_DELAY);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setThinking(true), SHOW_DELAY);
      return () => clearTimeout(t);
    }
  }, [section, msgCount, thinking]);


    useEffect(() => {
    if (!thinking && msgCount > 0) {
      const currentItem = data[section].content[msgCount - 1];
      if (currentItem.type === "operation") {
        onOpClick(currentItem);
        setOperations((prev) => [...prev, currentItem]);
      }
    }
  }, [thinking, msgCount, section, onOpClick]);



  return (
    <div className="chat-panel p-4">
      <div className="chat-messages flex flex-col items-start space-y-2">
        {data.map((sec, sIdx) => {
          if (sIdx > section) return null;
          const isCurrent = sIdx === section;
          const visible = isCurrent
            ? sec.content.slice(0, msgCount)
            : sec.content;

          // user messages => right
          if (sec.role === "user") {
            return (
              <React.Fragment key={sIdx}>
                {visible.map((item, i) => (
                  <UserMsg key={i} text={item.text} />
                ))}
              </React.Fragment>
            );
          }

          // system markdown-only => left
          if (sec.content.every((c) => c.type === "markdown")) {
            return (
              <React.Fragment key={sIdx}>
                {visible.map((item, i) => (
                  <div key={i} className="prose mb-4 self-start">
                    <ReactMarkdown>{item.text}</ReactMarkdown>
                  </div>
                ))}
                {isCurrent && thinking && (
                  <p className="self-start italic text-sm text-gray-500">
                    {thinkText}
                  </p>
                )}
              </React.Fragment>
            );
          }

          // system accordion steps => left
          return (
            <div key={sIdx} className="self-start w-full">
              <Accordion
                title={sec.title!}
                renderDottedIndicator={data[sIdx].content.length > 1}
                defaultExpanded
              >
                {visible.map((item, i) =>
                  item.type === "text" ? (
                    <p key={i} className="text-sm mb-2 whitespace-pre-line">
                      {item.text}
                    </p>
                  ) : (
                    <div
                      key={i}
                      className="mb-2"
                      onClick={() => onOpClick(item)}
                    >
                      <Operation
                        operationType={item.operationType!}
                        operationMsg={item.text}
                      />
                    </div>
                  )
                )}
                {isCurrent && thinking && (
                  <p className="italic text-sm text-gray-500 mt-1">
                    {thinkText}
                  </p>
                )}
              </Accordion>
            </div>
          );
        })}
        <span className="mb-10" ref={bottomRef}></span>
      </div>
    </div>
  );
};

export default ChatPanel;
'use client'

import { useState, useEffect } from 'react'

const CITIZENSHIP_QUESTIONS = [
  {
    question: "What is the supreme law of the land?",
    answer: "The Constitution"
  },
  {
    question: "What does the Constitution do?",
    answer: "• Sets up the government\n• Defines the government\n• Protects basic rights of Americans"
  },
  {
    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answer: "We the People"
  },
  {
    question: "What is an amendment?",
    answer: "• A change (to the Constitution)\n• An addition (to the Constitution)"
  },
  {
    question: "What do we call the first ten amendments to the Constitution?",
    answer: "The Bill of Rights"
  },
  {
    question: "What is one right or freedom from the First Amendment?",
    answer: "• Speech\n• Religion\n• Assembly\n• Press\n• Petition the government"
  },
  {
    question: "How many amendments does the Constitution have?",
    answer: "Twenty-seven (27)"
  },
  {
    question: "What did the Declaration of Independence do?",
    answer: "• Announced our independence (from Great Britain)\n• Declared our independence (from Great Britain)\n• Said that the United States is free (from Great Britain)"
  },
  {
    question: "What are two rights in the Declaration of Independence?",
    answer: "• Life\n• Liberty\n• Pursuit of happiness"
  },
  {
    question: "What is freedom of religion?",
    answer: "You can practice any religion, or not practice a religion."
  },
  {
    question: "What is the economic system in the United States?",
    answer: "• Capitalist economy\n• Market economy"
  },
  {
    question: "What is the \"rule of law\"?",
    answer: "• Everyone must follow the law\n• Leaders must obey the law\n• Government must obey the law\n• No one is above the law"
  },
  {
    question: "Name one branch or part of the government.",
    answer: "• Congress (legislative)\n• President (executive)\n• The courts (judicial)"
  },
  {
    question: "What stops one branch of government from becoming too powerful?",
    answer: "• Checks and balances\n• Separation of powers"
  },
  {
    question: "Who is in charge of the executive branch?",
    answer: "The President"
  },
  {
    question: "Who makes federal laws?",
    answer: "• Congress\n• Senate and House (of Representatives)\n• (U.S. or national) legislature"
  },
  {
    question: "What are the two parts of the U.S. Congress?",
    answer: "The Senate and House (of Representatives)"
  },
  {
    question: "How many U.S. Senators are there?",
    answer: "One hundred (100)"
  },
  {
    question: "We elect a U.S. Senator for how many years?",
    answer: "Six (6)"
  },
  {
    question: "The House of Representatives has how many voting members?",
    answer: "Four hundred thirty-five (435)"
  },
  {
    question: "We elect a U.S. Representative for how many years?",
    answer: "Two (2)"
  },
  {
    question: "Who does a U.S. Senator represent?",
    answer: "All people of the state"
  },
  {
    question: "Why do some states have more Representatives than other states?",
    answer: "• Because of the state's population\n• Because they have more people\n• Because some states have more people"
  },
  {
    question: "We elect a President for how many years?",
    answer: "Four (4)"
  },
  {
    question: "In what month do we vote for President?",
    answer: "November"
  },
  {
    question: "What is the name of the President of the United States now?",
    answer: "• Donald J. Trump\n• Donald Trump\n• Trump"
  },
  {
    question: "What is the name of the Vice President of the United States now?",
    answer: "• JD Vance\n• Vance"
  },
  {
    question: "If the President can no longer serve, who becomes President?",
    answer: "The Vice President"
  },
  {
    question: "If both the President and the Vice President can no longer serve, who becomes President?",
    answer: "The Speaker of the House"
  },
  {
    question: "Who is the Commander in Chief of the military?",
    answer: "The President"
  },
  {
    question: "Who signs bills to become laws?",
    answer: "The President"
  },
  {
    question: "Who vetoes bills?",
    answer: "The President"
  },
  {
    question: "What does the President's Cabinet do?",
    answer: "Advises the President"
  },
  {
    question: "What are two Cabinet-level positions?",
    answer: "• Secretary of Agriculture\n• Secretary of Commerce\n• Secretary of Defense\n• Secretary of Education\n• Secretary of Energy\n• Secretary of Health and Human Services\n• Secretary of Homeland Security\n• Secretary of Housing and Urban Development\n• Secretary of the Interior\n• Secretary of Labor\n• Secretary of State\n• Secretary of Transportation\n• Secretary of the Treasury\n• Secretary of Veterans Affairs\n• Attorney General\n• Vice President"
  },
  {
    question: "What does the judicial branch do?",
    answer: "• Reviews laws\n• Explains laws\n• Resolves disputes (disagreements)\n• Decides if a law goes against the Constitution"
  },
  {
    question: "What is the highest court in the United States?",
    answer: "The Supreme Court"
  },
  {
    question: "How many justices are on the Supreme Court?",
    answer: "Nine (9)"
  },
  {
    question: "Who is the Chief Justice of the United States now?",
    answer: "• John Roberts\n• John G. Roberts, Jr."
  },
  {
    question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    answer: "• To print money\n• To declare war\n• To create an army\n• To make treaties"
  },
  {
    question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
    answer: "• Provide schooling and education\n• Provide protection (police)\n• Provide safety (fire departments)\n• Give a driver's license\n• Approve zoning and land use"
  },
  {
    question: "What are the two major political parties in the United States?",
    answer: "Democratic and Republican"
  },
  {
    question: "What is the political party of the President now?",
    answer: "Republican (Party)"
  },
  {
    question: "What is the name of the Speaker of the House of Representatives now?",
    answer: "• Mike Johnson\n• Johnson\n• James Michael Johnson"
  },
  {
    question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
    answer: "• Citizens eighteen (18) and older (can vote)\n• You don't have to pay (a poll tax) to vote\n• Any citizen can vote. (Women and men can vote.)\n• A male citizen of any race (can vote)"
  },
  {
    question: "What is one responsibility that is only for United States citizens?",
    answer: "• Serve on a jury\n• Vote in a federal election"
  },
  {
    question: "Name one right only for United States citizens.",
    answer: "• Vote in a federal election\n• Run for federal office"
  },
  {
    question: "What are two rights of everyone living in the United States?",
    answer: "• Freedom of expression\n• Freedom of speech\n• Freedom of assembly\n• Freedom to petition the government\n• Freedom of religion\n• The right to bear arms"
  },
  {
    question: "What do we show loyalty to when we say the Pledge of Allegiance?",
    answer: "• The United States\n• The flag"
  },
  {
    question: "What is one promise you make when you become a United States citizen?",
    answer: "• Give up loyalty to other countries\n• Defend the Constitution and laws of the United States\n• Obey the laws of the United States\n• Serve in the U.S. military (if needed)\n• Serve (do important work for) the nation (if needed)\n• Be loyal to the United States"
  },
  {
    question: "How old do citizens have to be to vote for President?",
    answer: "Eighteen (18) and older"
  },
  {
    question: "What are two ways that Americans can participate in their democracy?",
    answer: "• Vote\n• Join a political party\n• Help with a campaign\n• Join a civic group\n• Join a community group\n• Give an elected official your opinion on an issue\n• Call Senators and Representatives\n• Publicly support or oppose an issue or policy\n• Run for office\n• Write to a newspaper"
  },
  {
    question: "What is one reason colonists came to America?",
    answer: "• Freedom\n• Political liberty\n• Religious freedom\n• Economic opportunity\n• Practice their religion\n• Escape persecution"
  },
  {
    question: "Who lived in America before the Europeans arrived?",
    answer: "• American Indians\n• Native Americans"
  },
  {
    question: "What group of people was taken to America and sold as slaves?",
    answer: "• Africans\n• People from Africa"
  },
  {
    question: "Why did the colonists fight the British?",
    answer: "• Because of high taxes (taxation without representation)\n• Because the British army stayed in their houses (boarding, quartering)\n• Because they didn't have self-government"
  },
  {
    question: "Who wrote the Declaration of Independence?",
    answer: "(Thomas) Jefferson"
  },
  {
    question: "When was the Declaration of Independence adopted?",
    answer: "July 4, 1776"
  },
  {
    question: "There were 13 original states. Name three.",
    answer: "• New Hampshire\n• Massachusetts\n• Rhode Island\n• Connecticut\n• New York\n• New Jersey\n• Pennsylvania\n• Delaware\n• Maryland\n• Virginia\n• North Carolina\n• South Carolina\n• Georgia"
  },
  {
    question: "What happened at the Constitutional Convention?",
    answer: "• The Constitution was written.\n• The Founding Fathers wrote the Constitution."
  },
  {
    question: "When was the Constitution written?",
    answer: "1787"
  },
  {
    question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    answer: "• (James) Madison\n• (Alexander) Hamilton\n• (John) Jay\n• Publius"
  },
  {
    question: "What is one thing Benjamin Franklin is famous for?",
    answer: "• U.S. diplomat\n• Oldest member of the Constitutional Convention\n• First Postmaster General of the United States\n• Writer of \"Poor Richard's Almanac\"\n• Started the first free libraries"
  },
  {
    question: "Who is the \"Father of Our Country\"?",
    answer: "(George) Washington"
  },
  {
    question: "Who was the first President?",
    answer: "(George) Washington"
  },
  {
    question: "What territory did the United States buy from France in 1803?",
    answer: "• The Louisiana Territory\n• Louisiana"
  },
  {
    question: "Name one war fought by the United States in the 1800s.",
    answer: "• War of 1812\n• Mexican-American War\n• Civil War\n• Spanish-American War"
  },
  {
    question: "Name the U.S. war between the North and the South.",
    answer: "• The Civil War\n• The War between the States"
  },
  {
    question: "Name one problem that led to the Civil War.",
    answer: "• Slavery\n• Economic reasons\n• States' rights"
  },
  {
    question: "What was one important thing that Abraham Lincoln did?",
    answer: "• Freed the slaves (Emancipation Proclamation)\n• Saved (or preserved) the Union\n• Led the United States during the Civil War"
  },
  {
    question: "What did the Emancipation Proclamation do?",
    answer: "• Freed the slaves\n• Freed slaves in the Confederacy\n• Freed slaves in the Confederate states\n• Freed slaves in most Southern states"
  },
  {
    question: "What did Susan B. Anthony do?",
    answer: "• Fought for women's rights\n• Fought for civil rights"
  },
  {
    question: "Name one war fought by the United States in the 1900s.",
    answer: "• World War I\n• World War II\n• Korean War\n• Vietnam War\n• (Persian) Gulf War"
  },
  {
    question: "Who was President during World War I?",
    answer: "(Woodrow) Wilson"
  },
  {
    question: "Who was President during the Great Depression and World War II?",
    answer: "(Franklin) Roosevelt"
  },
  {
    question: "Who did the United States fight in World War II?",
    answer: "Japan, Germany, and Italy"
  },
  {
    question: "What was the main concern of the United States during the Cold War?",
    answer: "Communism"
  },
  {
    question: "What movement tried to end racial discrimination?",
    answer: "Civil rights (movement)"
  },
  {
    question: "What did Martin Luther King, Jr. do?",
    answer: "• Fought for civil rights\n• Worked for equality for all Americans"
  },
  {
    question: "What major event happened on September 11, 2001, in the United States?",
    answer: "Terrorists attacked the United States."
  },
  {
    question: "Name one American Indian tribe in the United States.",
    answer: "• Cherokee\n• Navajo\n• Sioux\n• Chippewa\n• Choctaw\n• Pueblo\n• Apache\n• Iroquois\n• Creek\n• Blackfeet\n• Seminole\n• Cheyenne\n• Arawak\n• Shawnee\n• Mohegan\n• Huron\n• Oneida\n• Lakota\n• Crow\n• Teton\n• Hopi\n• Inuit"
  },
  {
    question: "Name one of the two longest rivers in the United States.",
    answer: "• Missouri (River)\n• Mississippi (River)"
  },
  {
    question: "What ocean is on the West Coast of the United States?",
    answer: "Pacific (Ocean)"
  },
  {
    question: "What ocean is on the East Coast of the United States?",
    answer: "Atlantic (Ocean)"
  },
  {
    question: "Name one U.S. territory.",
    answer: "• Puerto Rico\n• U.S. Virgin Islands\n• American Samoa\n• Northern Mariana Islands\n• Guam"
  },
  {
    question: "Name one state that borders Canada.",
    answer: "• Maine\n• New Hampshire\n• Vermont\n• New York\n• Pennsylvania\n• Ohio\n• Michigan\n• Minnesota\n• North Dakota\n• Montana\n• Idaho\n• Washington\n• Alaska"
  },
  {
    question: "Name one state that borders Mexico.",
    answer: "• California\n• Arizona\n• New Mexico\n• Texas"
  },
  {
    question: "What is the capital of the United States?",
    answer: "Washington, D.C."
  },
  {
    question: "Where is the Statue of Liberty?",
    answer: "• New York (Harbor)\n• Liberty Island\n• [Also acceptable: New Jersey, near New York City, and on the Hudson (River)]"
  },
  {
    question: "Why does the flag have 13 stripes?",
    answer: "• Because there were 13 original colonies\n• Because the stripes represent the original colonies"
  },
  {
    question: "Why does the flag have 50 stars?",
    answer: "• Because there is one star for each state\n• Because each star represents a state\n• Because there are 50 states"
  },
  {
    question: "What is the name of the national anthem?",
    answer: "The Star-Spangled Banner"
  },
  {
    question: "When do we celebrate Independence Day?",
    answer: "July 4"
  },
  {
    question: "Name two national U.S. holidays.",
    answer: "• Independence Day\n• Labor Day\n• Columbus Day\n• Thanksgiving\n• Christmas\n• New Year's Day\n• Martin Luther King, Jr. Day\n• Presidents' Day\n• Memorial Day\n• Veterans Day\n• Juneteenth"
  },
  {
    question: "What are three rights of everyone living in the United States?",
    answer: "• Freedom of expression\n• Freedom of speech\n• Freedom of assembly\n• Freedom to petition the government\n• Freedom of worship\n• The right to bear arms"
  },
  {
    question: "What do we show loyalty to when we say the Pledge of Allegiance?",
    answer: "• The United States\n• The flag"
  },
  {
    question: "What is one promise you make when you become a United States citizen?",
    answer: "• Give up loyalty to other countries\n• Defend the Constitution and laws of the United States\n• Obey the laws of the United States\n• Serve in the U.S. military (if needed)\n• Serve (do important work for) the nation (if needed)\n• Be loyal to the United States"
  },
  {
    question: "During the Cold War, what was the main concern of the United States?",
    answer: "Communism"
  },
  {
    question: "What are two Cabinet-level positions?",
    answer: "• Secretary of Agriculture\n• Secretary of Commerce\n• Secretary of Defense\n• Secretary of Education\n• Secretary of Energy\n• Secretary of Health and Human Services\n• Secretary of Homeland Security\n• Secretary of Housing and Urban Development\n• Secretary of the Interior\n• Secretary of Labor\n• Secretary of State\n• Secretary of Transportation\n• Secretary of the Treasury\n• Secretary of Veterans Affairs\n• Attorney General\n• Vice President"
  },
  {
    question: "What does the judicial branch do?",
    answer: "• Reviews laws\n• Explains laws\n• Resolves disputes (disagreements)\n• Decides if a law goes against the Constitution"
  },
  {
    question: "What is the highest court in the United States?",
    answer: "The Supreme Court"
  }
];


export default function Home() {
  const [questions, setQuestions] = useState(CITIZENSHIP_QUESTIONS)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [animating, setAnimating] = useState(false)

  const handleFlip = () => {
    if (!animating) {
      setFlipped(!flipped)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1 && !animating) {
      setAnimating(true)
      setTimeout(() => {
        setFlipped(false)
        setCurrentIndex(currentIndex + 1)
        setTimeout(() => setAnimating(false), 50)
      }, 150)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0 && !animating) {
      setAnimating(true)
      setTimeout(() => {
        setFlipped(false)
        setCurrentIndex(currentIndex - 1)
        setTimeout(() => setAnimating(false), 50)
      }, 150)
    }
  }

  const handleReset = () => {
    setCurrentIndex(0)
    setFlipped(false)
  }

  const handleShuffle = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setQuestions(shuffled)
    setCurrentIndex(0)
    setFlipped(false)
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrevious()
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        e.stopPropagation()
        handleFlip()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [currentIndex, flipped, animating, handlePrevious, handleNext, handleFlip])

  const currentCard = questions[currentIndex]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem'
      }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem',
            margin: '0 0 1rem 0'
          }}>
            US Citizenship Test for Elly
          </h1>
          <p style={{
            color: '#dbeafe',
            fontSize: '1.25rem',
            margin: 0
          }}>
            Official USCIS Civics Questions & Answers
          </p>
        </div>

        {/* Card */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 3rem auto'
        }}>
          <div style={{
            perspective: '1000px',
            width: '100%',
            height: '400px'
          }}>
            <div
              onClick={handleFlip}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                cursor: 'pointer'
              }}
            >
              {/* Question Side */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                borderLeft: '6px solid #2563eb',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem'
              }}>
                {/* Question Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '2rem'
                }}>
                  <span style={{
                    background: '#dbeafe',
                    color: '#1e40af',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    Question {currentIndex + 1}
                  </span>
                  <span style={{
                    color: '#6b7280',
                    fontSize: '0.9rem'
                  }}>
                    Click or press ↑↓ to reveal answer
                  </span>
                </div>

                {/* Question Content */}
                <div style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    color: '#1f2937',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {currentCard.question}
                  </h2>
                </div>

                {/* Question Footer */}
                <div style={{
                  textAlign: 'center',
                  color: '#9ca3af',
                  fontSize: '0.9rem',
                  fontStyle: 'italic'
                }}>
                  Think about your answer, then flip to check
                </div>
              </div>

              {/* Answer Side */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                borderLeft: '6px solid #16a34a',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
                transform: 'rotateY(180deg)'
              }}>
                {/* Answer Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '2rem'
                }}>
                  <span style={{
                    background: '#dcfce7',
                    color: '#166534',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    Answer {currentIndex + 1}
                  </span>
                  <span style={{
                    color: '#6b7280',
                    fontSize: '0.9rem'
                  }}>
                    Official USCIS Answer
                  </span>
                </div>

                {/* Answer Content */}
                <div style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '1.3rem',
                    color: '#374151',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-line',
                    margin: 0
                  }}>
                    {currentCard.answer}
                  </div>
                </div>

                {/* Answer Footer */}
                <div style={{
                  textAlign: 'center',
                  color: '#9ca3af',
                  fontSize: '0.9rem',
                  fontStyle: 'italic'
                }}>
                  Click to see the question again
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              borderRadius: '50px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: currentIndex === 0 ? 0.5 : 1,
              transition: 'all 0.2s'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>←</span>
            Previous
          </button>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>
              {currentIndex + 1} of {questions.length}
            </span>

            <button
              onClick={handleReset}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '1.2rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              title="Reset to question 1"
            >
              ↻
            </button>

            <button
              onClick={handleShuffle}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '1.2rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              title="Shuffle questions randomly"
            >
              🔀
            </button>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              borderRadius: '50px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: currentIndex === questions.length - 1 ? 'not-allowed' : 'pointer',
              opacity: currentIndex === questions.length - 1 ? 0.5 : 1,
              transition: 'all 0.2s'
            }}
          >
            Next
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            height: '8px',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '1rem'
          }}>
            <div style={{
              background: 'white',
              height: '100%',
              borderRadius: '10px',
              transition: 'width 0.3s ease',
              width: `${((currentIndex + 1) / questions.length) * 100}%`
            }} />
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem'
          }}>
            <span>Progress</span>
            <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}% Complete</span>
          </div>
        </div>

        {/* Instructions */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '1rem',
          padding: '1.5rem',
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1rem',
            lineHeight: '1.6',
            margin: 0
          }}>
            <strong>How to use:</strong> Read each question carefully, think of your answer, then click the card or press ↑/↓ to reveal the official answer. 
            Use ← → arrow keys to navigate between questions.
          </p>
        </div>
      </div>
    </div>
  )
}
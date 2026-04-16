"use client"
import { ProjectsProps } from '@/app/projects/projectProps'
import Link from 'next/link'
import Interactions from './interactions'
import Scale from './scale'
import "./cards.css"

type Props = {
  category: string
  items: ProjectsProps[]
  onClick: () => void
  isOpen: boolean
}

export default function CardStack({ category, items, onClick, isOpen }: Props) {
  const cardW = 500
  const cardH = 275
  const gapx = 540
  const gapy = 375

  const cols = Math.ceil(Math.sqrt(items.length))
  const rows = Math.ceil(items.length / cols)

  return (
    <div className="flex flex-col gap-6">
      {/* Card container */}
      <div
        onClick={onClick}
        className="relative cursor-pointer"
        style={{
          width: isOpen ? cols * gapx + 50 : cardW + 40,
          height: isOpen ? rows * gapy + 150 : cardH,
          transition: "all 0.5s cubic-bezier(.22,1,.36,1)"
        }}
      >
        {items.map((item, i) => {
          const row = Math.floor(i / cols)
          const col = i % cols
          const gridX = col * gapx
          const gridY = row * gapy
          const stackOffset = Math.min(i, 2)
          const rotate = (i % 5 - 2) * 3

          const cardContent = (
            <div
              className="absolute bg-blue-700 hover:shadow-2xl 
                                    hover:shadow-zinc-500 
                                    transition-shadow
                                    rounded-lg"
              style={{
                width: cardW,
                height: cardH,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                transition: "all 0.5s cubic-bezier(.22,1,.36,1)",
                transitionDelay: `${i * 20}ms`,
                transform: isOpen
                  ? `translate(${gridX}px, ${gridY}px) rotate(0deg) scale(1)`
                  : `
                      translate(${stackOffset * 12}px, ${stackOffset * 6}px)
                      rotate(${rotate}deg)
                      scale(${1 - stackOffset * 0.05})
                    `,
                zIndex: isOpen ? 1 : 100 - i,
                opacity: isOpen ? 1 : i < 3 ? 1 : 0
              }}
            >
              <img
                src={item.image_1}
                className="w-full h-full object-cover"
              />
            </div>
          )

            return (
        <div key={item._id}>
          {isOpen ? (
            <Interactions>
              <Link href={item.link}>
                {/* Card Image */}
                {cardContent}

                {/* Title & Description */}
                <div
                  style={{
                    position: "absolute",
                    width: cardW,
                    transform: `translate(${gridX}px, ${gridY + cardH + 10}px)`,
                    transition: "all 0.5s cubic-bezier(.22,1,.36,1)",
                    transitionDelay: `${i * 20}ms`,
                    zIndex: 1
                  }}
                >
                  <h1 className="text-md uppercase font-semibold">{item.title}</h1>
                  <p className="text-sm text-gray-400 pb-2">{item.description}</p>
                </div>
              </Link>
            </Interactions>
            ) : (
              cardContent
            )}
            </div>
        )
        })}
      </div>

      {/* Category label */}
      {!isOpen && (
        <div className="text-center">
          <h1 className="uppercase">{category}</h1>
        </div>
      )}
    </div>
  )
}

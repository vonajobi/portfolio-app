import { notFound } from "next/navigation";
import { CaseStudyFrame } from "@/app/components/layout/caseStudyFrame";
import { getProject } from "@/app/projects/data";

export const metadata = {
  title: "H-Blocks: Case Study",
  description: "TODO",
};

export default function CaseStudy() {
  const p = getProject("paladone");
  if (!p) notFound();

  const meta: [string, string][] = [
    ["Year", String(p.year)],
    ["Role", p.meta.role],
  ];
  if (p.meta.tools?.length) meta.push(["Skills & Tools", p.meta.tools.join(", ")]);

  const dir = "/assets/projects/paladone/";

  // Shared styles
  const sectionStyle = "mx-auto mt-16 max-w-3xl scroll-mt-24 md:mt-24";
  const wideSectionStyle = "mx-auto mt-16 max-w-5xl scroll-mt-24 md:mt-24";
  // Paragraph spacing without <br/> tags
  const prose = "space-y-4";
  // h-auto keeps aspect ratio; break-inside-avoid stops images splitting across columns
  const img = "block h-auto w-full rounded-md";
  const galleryImg = `${img} mb-4 break-inside-avoid`;
  const highlight = "font-bold text-[#f2777a]";

  const processImages: [string, string][] = [
    ["ideation_1.jpg", "Early ideation sketches"],
    ["ideation_2.jpg", "Ideation sketches, round two"],
    ["ideation_5.jpg", "Ideation sketches exploring hinges"],
    ["ideation_4.jpg", "Ideation sketches exploring block forms"],
    ["ideation_6.jpg", "Ideation sketches exploring connections"],
    ["tetris_blocks v2.png", "Block shape exploration"],
    ["final_ideation.jpg", "Final ideation sketches"],
    ["IMG_7320.jpg", "Prototype work"],
    ["IMG_7322.jpg", "Prototype work"],
    ["IMG_7324.jpg", "Prototype work"],
  ];

  const solutionImages: [string, string][] = [
    ["final_design_2.webp", "Final designs"],
    ["final_design_3.svg", "Final designs, eyes"],
    ["group_1.webp", "Final design renders"],
    ["scene_1v2.webp", "Final design renders"],
    ["scene_2_k.webp", "Render of K block"],
    ["scene_2_n.webp", "Render of N block"],
    ["h_block_closeup.webp", "Render of H block"],
    ["scene_2_t.webp", "Render of T block"],
    ["toy_bloom.webp", "Render of all blocks"],
    ["Silver.webp", "H-Blocks graphic"],
    ["Silver_3.webp", "H-Blocks graphic"],
    ["Silver_2.webp", "My creations"],
    ["mockup.webp", "Packaging mockup"],
    ["Graphite.webp", "Instagram mockup"],
  ];

  return (
    <CaseStudyFrame title="H-Blocks" backHref={`/projects/${p.slug}`} nav={true}>
      <header>
        {/* Stacks on phones, two columns from md up */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h1>H-Blocks</h1>
            <p className="font-ital">A Sustainable Outdoor Lighting Project</p>
          </div>
          <img
            src={`${dir}intro.webp`}
            alt="Paladone lighting"
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
            className={img}
          />
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 md:mt-12 md:grid-cols-3">
          {meta.map(([label, value]) => (
            <div key={label}>
              <dt className="inline-block rounded-sm bg-white/10 px-2 py-0.5 text-[11px] text-white/60">
                {label}
              </dt>
              <dd className="mt-2 text-sm text-white/85">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <hr className="my-12 border-white/15 md:my-24" />

      {/* [01] Challenge */}
      <section id="problem" data-title="[01] Challenge" className={sectionStyle}>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className={prose}>
            <h2>The Challenge</h2>
            <p>
              Paladone is the UK&apos;s market-leading supplier of gifting products, renowned for its
              iconic licenses and trend-focused products. Paladone tasked me with advancing their most
              successful category—Lighting—by incorporating new sustainable practices and expanding
              into outdoor entertainment.
            </p>
            <p>
              In response, I developed a construction set that enables users to create their own
              designs and compete with others both in person and virtually.
            </p>
          </div>
          <img src={`${dir}brief.svg`} alt="Project brief" loading="lazy" decoding="async" className={img} />
        </div>
      </section>

      {/* [02] Opportunity */}
      <section id="process" data-title="[02] Opportunity" className={wideSectionStyle}>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Text first on mobile, image on the left from md up */}
          <img
            src={`${dir}mk_rs_3.svg`}
            alt="What if we could create more by wasting less graphic"
            loading="lazy"
            decoding="async"
            className={`${img} order-2 md:order-1`}
          />
          <div className={`${prose} order-1 md:order-2`}>
            <h2>Opportunity</h2>
            <p>
              The brief was to create <span className={highlight}>sustainable lighting</span> for
              outdoor entertainment; it had to be <span className={highlight}>portable</span>; it had
              to have a <span className={highlight}>secondary function</span> that is not the light;
              and finally it had to be <span className={highlight}>playful.</span>
            </p>
            <p>
              I also had to consider maintenance, disposal costs, and the average cost of the product
              compared to Paladone&apos;s other products. I began the project by researching both
              Paladone&apos;s products and competitor products, as well as completing market research.
            </p>
          </div>
        </div>

        <div className={`${prose} mx-auto mt-8 max-w-3xl`}>
          <p>
            Eco-friendly and sustainable toys were gaining traction among customers, with
            manufacturers focusing on responsible materials and manufacturing processes. My work as a
            designer revolved around accessibility and inclusion. I aimed to explore how accessibility
            could be connected to sustainability. Sustainable development includes economic
            development, social inclusion, and environmental awareness. It balances company interest,
            environmental concerns, and social concerns.
          </p>
          <p>
            Paladone already has the potential for social inclusion. Through lighting, they could
            expand their customer market through sensory integration. Sensory toys help stimulate one
            or more of the senses and aid in regulating emotion. Visual stimulation combined with
            tactile stimulation provides a great opportunity for Paladone to be sustainable.
          </p>
        </div>
      </section>

      {/* [03] Process */}
      <section id="how-its-built" data-title="[03] Process" className={sectionStyle}>
        <div className={prose}>
          <h2>Process</h2>
          <p>
            I went through several rounds of ideation starting from the Rubik&apos;s Cube. It uses 8
            hinges in a 2 x 4 grid resulting in 32 possibilities. Every hinge has the middle tile on
            the outside or the inside of the hinge. I liked the movement and high number of
            possibilities.
          </p>
          <p>
            I took the hinging mechanism from the Rubik&apos;s Cube and tried to spread the width.
            Each cube would connect via magnetic hinges. When two cubes connected, they would light up.
          </p>
          <p>
            I then tried to apply these ideas to a more 3D form. I thought an interesting approach
            would be to virtualize the blocks. The number of blocks required would be limited to the
            different types of blocks. When the user connects one block to another, it appears on a
            connected system or app. This reduces the need for excess pieces. The goal would be to
            come up with as many forms as possible with a set number of blocks.
          </p>
          <p>
            I heavily researched power systems to support the modules and eventually arrived at USB-C
            powered modules with custom internals. I designed the schematics to go along with the
            modules, and they featured a boost converter.
          </p>
        </div>

        {/* 2 columns on phones, 3 from md up */}
        <div className="mt-8 columns-2 gap-4 md:columns-3">
          {processImages.map(([file, alt]) => (
            <img
              key={file}
              src={`${dir}${file}`}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={galleryImg}
            />
          ))}
        </div>
      </section>

      {/* [04] Solution */}
      <section id="outcome" data-title="[04] Solution" className={sectionStyle}>
        <div className={prose}>
          <h2>Project Solution</h2>
          <p>
            I settled on a construction-style game that combines physical blocks and virtual
            entertainment. It is primarily for adults seeking a therapeutic and creative outlet. It
            features 7 receiving blocks and one power module. The sample design has one USB-C plug and
            receptacle on the top and bottom of each block; placement can vary and be marketed as
            different editions.
          </p>

          <h3 className="pt-4">H-Block Party</h3>
          <p>
            The H-Block Party consists of a single Bluetooth module (Head), at least three different
            types of adjoining blocks, and a connected app. The Bluetooth module serves as the
            communication interface between the physical blocks and the mobile app. It supports
            Bluetooth Low Energy (BLE) for efficient wireless communication. The power module is
            responsible for communication with the user&apos;s mobile device.
          </p>
          <p>
            Other blocks connect to each other via USB-C and receive power through the power module.
            When a block receives power, it lights up blue. The power module is distinguished by a
            power button and three battery light indicators. Users can construct any form they like.
          </p>
        </div>

        {/* Single column on small phones, 2 from sm up */}
        <div className="mt-8 columns-1 gap-4 sm:columns-2">
          {solutionImages.map(([file, alt]) => (
            <img
              key={file}
              src={`${dir}${file}`}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={galleryImg}
            />
          ))}
        </div>
      </section>

      {/* [05] Learnings */}
      <section id="learnings" data-title="[05] Learnings" className={sectionStyle}>
        <div className={prose}>
          <h2>My Learnings</h2>
          <p>
            This project was fun and got me to think about the entire design process from ideation
            all the way to manufacturing. I got to experiment with electronics, which I loved and
            continued to do as a hobby. Creating the graphics was a challenge, but in the end I am
            proud of the outcome.
          </p>
        </div>
      </section>
    </CaseStudyFrame>
  );
}

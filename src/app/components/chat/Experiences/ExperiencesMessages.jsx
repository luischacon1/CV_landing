import { motion } from "framer-motion";
import GrayMessage from "../GrayMessage";

const ExperiencesMessages = () => {
  let index = 1;
  let counter = 1;
  const timeGap = 2;
  return (
    <>
      {/* ICON Music Business School */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.2 * counter }}
      >
        <h1 className="text-xs text-txt text-center">Jun 2024 – present</h1>
      </motion.div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl transition-transform hover:scale-[1.03]"
      >
        <GrayMessage bg="#44484e" order={(counter += timeGap)}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index++ }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row gap-4 items-center">
              <img src="portfolio/luis/iconblanco.png" alt="icon music business school" className="w-10" />
              <div className="flex flex-col">
                <p className="font-black text-lg">ICON Music Business School</p>
                <p className="text-sm font-bold italic">Co-Founder - CEO</p>
              </div>
            </div>
          </motion.div>
        </GrayMessage>
      </a>

      {/* Inédito Podcast */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.2 * counter }}
      >
        <h3 className="text-xs text-txt text-center">Sep 2023 – present</h3>
      </motion.div>
      <a
        href="https://www.youtube.com/watch?v=mUqx8NFBc54&list=PLpTZ1Ji32zWkJ-C4WBSZ5aK9siBUkgi9c&index=13"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl transition-transform hover:scale-[1.03]"
      >
        <GrayMessage bg="#44484e" order={(counter += timeGap)}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index++ }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row gap-4 items-center">
              <img src="portfolio/luis/in.png" alt="inedito podcast" className="w-10" />
              <div className="flex flex-col">
                <p className="font-black text-lg">Inédito Podcast</p>
                <p className="text-sm font-bold italic">Host - Content Strategist</p>
              </div>
            </div>
          </motion.div>
        </GrayMessage>
      </a>

      {/* Influence Hub */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.2 * counter }}
      >
        <h3 className="text-xs text-txt text-center">Jun 2024 – Jan 2025</h3>
      </motion.div>
      <a
        href="https://www.influencehub.es"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl transition-transform hover:scale-[1.03]"
      >
        <GrayMessage bg="#44484e" order={(counter += timeGap)}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index++ }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row gap-4 items-center">
              <img src="portfolio/luis/white_hub.png" alt="Xs experience" className="w-16" />
              <div className="flex flex-col">
                <p className="font-black text-lg">Influence Hub</p>
                <p className="text-sm font-bold italic">Influencer Marketer</p>
              </div>
            </div>
          </motion.div>
        </GrayMessage>
      </a>

      {/* No Suspires */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.2 * counter }}
      >
        <h3 className="text-xs text-txt text-center">August 2024</h3>
      </motion.div>
      <a
        href="https://cadenaser.com/castillayleon/2023/08/21/exito-total-de-no-suspires-el-campamento-de-pedro-buerbaum-celebrado-en-el-bierzo-radio-bierzo/"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl transition-transform hover:scale-[1.03]"
      >
        <GrayMessage bg="#44484e" order={(counter += timeGap)}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index++ }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row gap-4 items-center">
              <img src="portfolio/luis/ns.png" alt="Xs experience" className="w-16" />
              <div className="flex flex-col">
                <p className="font-black text-lg">No Suspires</p>
                <p className="text-sm font-bold italic">Head of event production</p>
              </div>
            </div>
          </motion.div>
        </GrayMessage>
      </a>

      {/* Artist Boosting */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.2 * counter }}
      >
        <h3 className="text-xs text-txt text-center">Dec 2023 – Jul 2024</h3>
      </motion.div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl transition-transform hover:scale-[1.03]"
      >
        <GrayMessage bg="#44484e" order={(counter += timeGap)}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index++ }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row gap-4 items-center">
              <img src="portfolio/luis/elevate.png" alt="artist boosting" className="w-10" />
              <div className="flex flex-col">
                <p className="font-black text-lg">Artist Boosting</p>
                <p className="text-sm font-bold italic">Growth - Ops Lead</p>
              </div>
            </div>
          </motion.div>
        </GrayMessage>
      </a>

      {/* Skill Hunting */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.2 * counter }}
      >
        <h3 className="text-xs text-txt text-center">Nov 2022 – Sep 2024</h3>
      </motion.div>
      <a
        href="https://www.todostartups.com/9/184423/skill-hunting-jovenes-emprendedores"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl transition-transform hover:scale-[1.03]"
      >
        <GrayMessage bg="#44484e" order={(counter += timeGap)}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index++ }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row gap-4 items-center">
              <img src="portfolio/luis/skhh.png" alt="skill hunting" className="w-16" />
              <div className="flex flex-col">
                <p className="font-black text-lg">Skill Hunting</p>
                <p className="text-sm font-bold italic">Co-Founder - Business Development Lead</p>
              </div>
            </div>
          </motion.div>
        </GrayMessage>
      </a>

      {/* Spine Consulting */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.2 * counter }}
      >
        <h3 className="text-xs text-txt text-center">Oct 2022 – Sep 2023</h3>
      </motion.div>
      <a
        href="https://www.spineconsulting.es"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl transition-transform hover:scale-[1.03]"
      >
        <GrayMessage bg="#44484e" order={(counter += timeGap)}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index++ }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row gap-4 items-center">
              <img src="portfolio/luis/spine.png" alt="spine consulting" className="w-18" />
              <div className="flex flex-col">
                <p className="font-black text-lg">Spine Consulting</p>
                <p className="text-sm font-bold italic">Account Executive</p>
              </div>
            </div>
          </motion.div>
        </GrayMessage>
      </a>
    </>
  );
};

export default ExperiencesMessages;

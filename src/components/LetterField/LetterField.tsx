import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Letter } from "../../types/types";
import { LetterFieldContainer } from "./LetterField.sc";

type Props = {
	selectedLetter?: Letter;
};

const LetterField = ({ selectedLetter }: Props) => {
	return (
		<LetterFieldContainer>
			<AnimatePresence exitBeforeEnter>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					key={selectedLetter}
				>
					{selectedLetter}
				</motion.div>
			</AnimatePresence>
		</LetterFieldContainer>
	);
};

export default LetterField;

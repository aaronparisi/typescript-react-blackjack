import React, { ReactElement } from "react";
import * as CardIcons from "react-icons/gi/";

export interface Card {
	icon: ReactElement;
	value: number;
}

export type Deck = Card[];

export const unshuffledDeck: Deck = [
	{
		icon: <CardIcons.GiCard2Hearts />,
		value: 2,
	},
	{
		icon: <CardIcons.GiCard3Hearts />,
		value: 3,
	},
	{
		icon: <CardIcons.GiCard4Hearts />,
		value: 4,
	},
	{
		icon: <CardIcons.GiCard5Hearts />,
		value: 5,
	},
	{
		icon: <CardIcons.GiCard6Hearts />,
		value: 6,
	},
	{
		icon: <CardIcons.GiCard7Hearts />,
		value: 7,
	},
	{
		icon: <CardIcons.GiCard8Hearts />,
		value: 8,
	},
	{
		icon: <CardIcons.GiCard9Hearts />,
		value: 9,
	},
	{
		icon: <CardIcons.GiCard10Hearts />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardJackHearts />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardQueenHearts />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardKingHearts />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardAceHearts />,
		value: 11,
	},
	{
		icon: <CardIcons.GiCard2Diamonds />,
		value: 2,
	},
	{
		icon: <CardIcons.GiCard3Diamonds />,
		value: 3,
	},
	{
		icon: <CardIcons.GiCard4Diamonds />,
		value: 4,
	},
	{
		icon: <CardIcons.GiCard5Diamonds />,
		value: 5,
	},
	{
		icon: <CardIcons.GiCard6Diamonds />,
		value: 6,
	},
	{
		icon: <CardIcons.GiCard7Diamonds />,
		value: 7,
	},
	{
		icon: <CardIcons.GiCard8Diamonds />,
		value: 8,
	},
	{
		icon: <CardIcons.GiCard9Diamonds />,
		value: 9,
	},
	{
		icon: <CardIcons.GiCard10Diamonds />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardJackDiamonds />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardQueenDiamonds />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardKingDiamonds />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardAceDiamonds />,
		value: 11,
	},
	{
		icon: <CardIcons.GiCard2Spades />,
		value: 2,
	},
	{
		icon: <CardIcons.GiCard3Spades />,
		value: 3,
	},
	{
		icon: <CardIcons.GiCard4Spades />,
		value: 4,
	},
	{
		icon: <CardIcons.GiCard5Spades />,
		value: 5,
	},
	{
		icon: <CardIcons.GiCard6Spades />,
		value: 6,
	},
	{
		icon: <CardIcons.GiCard7Spades />,
		value: 7,
	},
	{
		icon: <CardIcons.GiCard8Spades />,
		value: 8,
	},
	{
		icon: <CardIcons.GiCard9Spades />,
		value: 9,
	},
	{
		icon: <CardIcons.GiCard10Spades />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardJackSpades />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardQueenSpades />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardKingSpades />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardAceSpades />,
		value: 11,
	},
	{
		icon: <CardIcons.GiCard2Clubs />,
		value: 2,
	},
	{
		icon: <CardIcons.GiCard3Clubs />,
		value: 3,
	},
	{
		icon: <CardIcons.GiCard4Clubs />,
		value: 4,
	},
	{
		icon: <CardIcons.GiCard5Clubs />,
		value: 5,
	},
	{
		icon: <CardIcons.GiCard6Clubs />,
		value: 6,
	},
	{
		icon: <CardIcons.GiCard7Clubs />,
		value: 7,
	},
	{
		icon: <CardIcons.GiCard8Clubs />,
		value: 8,
	},
	{
		icon: <CardIcons.GiCard9Clubs />,
		value: 9,
	},
	{
		icon: <CardIcons.GiCard10Clubs />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardJackClubs />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardQueenClubs />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardKingClubs />,
		value: 10,
	},
	{
		icon: <CardIcons.GiCardAceClubs />,
		value: 11,
	},
];

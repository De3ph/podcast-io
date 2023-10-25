/* eslint-disable @typescript-eslint/no-unused-vars */

export interface IFooterLink {
	name: string;
	url: string;
}

export interface IAccordionItemProps {
	value: string;
	title: string;
	desc: string;
}

export interface IPodcast {
	id: number;
	name: string;
	author: string;
	createdAt: Date;
	coverName: string; // name of the cover image
	timesStarred: number;
}

export interface ILoginError {
	isInvalid: boolean;
	message: null | string;
}

export interface PodcastPlan {
	name: string;
	price: string;
	advantages: string[];
  };
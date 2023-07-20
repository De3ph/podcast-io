/* eslint-disable @typescript-eslint/no-unused-vars */

interface IFooterLink {
	name: string;
	url: string;
}

interface IAccordionItemProps {
	value: string;
	title: string;
	desc: string;
}

interface IPodcast {
	id: number;
	name: string;
	author: string;
	createdAt: Date;
	coverName: string; // name of the cover image
}

interface ILoginError {
	isInvalid: boolean;
	message: null | string;
}
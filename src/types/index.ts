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
	categories: string[];
}

export const capitalize = (s) => (
	s.replace(/(?:^|\s)\S/g, (a) => (a.toUpperCase()))
);

export const cleanKey = (key) => (key.replace(/^relationships\./, ''));

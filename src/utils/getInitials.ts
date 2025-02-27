const getInitials = (name?: string): string => {
	if (!name) return 'U'
	return name.charAt(0).toUpperCase()
}
export default getInitials

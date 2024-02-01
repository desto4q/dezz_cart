type feed_props = {
	content?: any[] | null;
};
function Feed({ content }: feed_props) {
	return (
		<div className="feed">
			<div className="strict_width">{content}</div>
		</div>
	);
}

export default Feed;

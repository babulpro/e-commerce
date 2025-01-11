const ShortDescription = (description, wordLimit = 30) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
};

export default ShortDescription
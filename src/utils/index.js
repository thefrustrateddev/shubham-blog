/**
 * Basic utilities being used across the project
 */
/**
 * @param  {} date
 * @returns string: 16 Hours ago
 */
export const timeSince = (date) => {
  var seconds = Math.floor(date / 1000);
  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};

/**
 * @param  {} categories
 * @returns Object
 */
export const filterCategories = (categories) => {
  return categories.map((category) => {
    return {
      name: category.name,
      slug: category.slug,
    };
  });
};

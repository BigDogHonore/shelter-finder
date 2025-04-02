function formatAddress(address) {
    return address ? address.replace(/\s+/g, ' ').trim() : 'Address not available';
}

function filterSheltersByCity(shelters, city) {
    return shelters.filter(shelter => shelter.city.toLowerCase() === city.toLowerCase());
}

function sortSheltersByName(shelters) {
    return shelters.sort((a, b) => a.name.localeCompare(b.name));
}

export { formatAddress, filterSheltersByCity, sortSheltersByName };
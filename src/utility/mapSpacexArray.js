const mapSpacexArray = ( spacexArray ) => spacexArray.map(( value, index ) => ({

    id: index,
    missionName: value?.mission_name,
    launchYear: value?.launch_year,
    patch: value?.links?.mission_patch_small || 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'

}));

export { mapSpacexArray };

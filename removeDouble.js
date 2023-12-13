function remove_double(mot){
    let tab_sorted = []
    mot.forEach(element => {
        (tab_sorted.includes(element) ? null : tab_sorted.push(element))
    });
    console.log(tab_sorted)
}

remove_double([1,1,2,4,5,2,1,2,3,5,5,5])
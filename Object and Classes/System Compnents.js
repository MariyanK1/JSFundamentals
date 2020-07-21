/*
You will be given a register of systems with components and subcomponents.
You need to build an ordered database of all the elements that have been given to you.
The elements are registered in a very simple way. When you have processed all of the input data, you must print them in a specific order.

For every System you must print its components in a specified order, and for every Component, you must print its Subcomponents in a specified order.

The Systems you’ve stored must be ordered by amount of components, in descending order, as first criteria, and by alphabetical order as second criteria.
The Components must be ordered by amount of Subcomponents, in descending order.

Input
The input comes as array of strings. Each element holds data about a system, a component in that system, and a subcomponent in that component.
If the given system already exists, you should just add the new component to it.
If even the component exists, you should just add the new subcomponent to it.
The subcomponents will always be unique.

The input format is:
“{systemName} | {componentName} | {subcomponentName}” 
All of the elements are strings, and can contain any ASCII character.
The string comparison for the alphabetical order is case-insensitive.

Output
As output you need to print all of the elements, ordered exactly in the way specified above.

The format is:
“{systemName}
 |||{componentName}
 |||{component2Name}
 ||||||{subcomponentName}
 ||||||{subcomponent2Name}
 {system2Name} 
 ...”

Examples

Input
['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']	Lambda

Output
|||CoreA
||||||A23
||||||A24
||||||A25
|||CoreB
||||||B24
|||CoreC
||||||C4
SULS
|||Main Site
||||||Home Page
||||||Login Page
||||||Register Page
|||Judge Site
||||||Login Page
||||||Submittion Page
|||Digital Site
||||||Login Page
Indice
|||Session
||||||Default Storage
||||||Default Security


*/


function components(data) {
    let catalogue = new Map;
    
    for (let line of data) {
        let [system, component, subComponent] = line.split(/\s\|\s/);
        if (!catalogue.has(system)) {
            catalogue.set(system, new Map);
        }

        if (!catalogue.get(system).has(component)) {
            catalogue.get(system).set(component, [])
        }
        catalogue.get(system).get(component).push(subComponent);
    }
    
    function systemSort(sysA, sysB, catalogue) {
        let aComponents = catalogue.get(sysA).size;
        let bComponents = catalogue.get(sysB).size;
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return sysA.toLowerCase().localeCompare(sysB.toLocaleLowerCase());
    }

    let systems = [...catalogue.keys()].sort((a, b) => systemSort(a, b, catalogue));
    for (let system of systems) {
        console.log(system);
        let components = [...catalogue.get(system).keys()].sort((s1, s2) => catalogue.get(system).get(s2).length - catalogue.get(system).get(s1).length);
        for (let component of components) {
            console.log(`|||${component}`);
            for (let subComponent of catalogue.get(system).get(component)) {
                console.log(`||||||${subComponent}`);
            }
        }
    }
}

components(
    ['SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security'
    ]
)

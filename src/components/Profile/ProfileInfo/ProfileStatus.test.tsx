import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", ()=> {
        const component = create(<ProfileStatus updateStatus={()=>{}} status = "SUBSCRIBE TO BASIC"/>);
        const instance = component.getInstance();
       expect(instance?.props.status).toBe("SUBSCRIBE TO BASIC")
    })

    test("after creation span should be displayed", ()=> {
        const component = create(<ProfileStatus updateStatus={()=>{}} status = "SUBSCRIBE TO BASIC"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children.length).not.toBeNull()
    })

    test("after creation input should not be displayed", ()=> {
        const component = create(<ProfileStatus updateStatus={()=>{}} status = "SUBSCRIBE TO BASIC"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow()
    })

    test("after creation span should contains correct status", ()=> {
        const component = create(<ProfileStatus updateStatus={()=>{}} status = "SUBSCRIBE TO BASIC"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[1]).toBe("SUBSCRIBE TO BASIC")
    })
})
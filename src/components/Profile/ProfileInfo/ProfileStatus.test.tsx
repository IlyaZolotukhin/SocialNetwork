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

    test("input should be displayed in editMode instead span", ()=> {
        const component = create(<ProfileStatus updateStatus={()=>{}} status = "SUBSCRIBE TO BASIC"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("SUBSCRIBE TO BASIC")
    })

/*    test("callback should be called", ()=> {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus updateStatus={mockCallback} status = "SUBSCRIBE TO BASIC"/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1)
    })*/
})
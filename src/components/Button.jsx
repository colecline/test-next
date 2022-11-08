import { Popover } from "@headlessui/react";

export default function Button() {
    return (
    <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div>
          <p>Hello</p>
        </div>
      </Popover.Panel>
    </Popover>
    )
}

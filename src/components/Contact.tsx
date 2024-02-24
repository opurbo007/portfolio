import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <div className="h-full sm:h-[40rem] py-8 ">
      <div>
        <h2 className="flex items-center justify-center font-semibold text-4xl pb-16 tracking-[0.5rem]">
          CONTACT ME
        </h2>
      </div>

      <div>
        <div className="flex items-center flex-col gap-6">
          <Input
            type="email"
            placeholder="Enter your Email Address"
            className="w-3/4 sm:w-1/2 dark:bg-slate-50"
          />
          <Textarea
            className="w-3/4 sm:w-1/2 h-32 dark:bg-slate-50 text-wrap"
            placeholder={
              "I'd love to hear from you! Share your thoughts here..."
            }
          />
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

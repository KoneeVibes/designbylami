import { useContext, useRef, useState } from "react";
import { BaseFormModal } from "../../component/modal/form";
import { Context } from "../../context";
import { InquiryFormWrapper } from "./styled";
import { Box, Chip, CircularProgress, Grid, IconButton, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { BaseFieldSet } from "../../component/formfield/fieldset/styled";
import { BaseLabel } from "../../component/formfield/label/styled";
import { BaseInput } from "../../component/formfield/input/styled";
import { BaseButton } from "../../component/button/styled";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import emailjs from '@emailjs/browser';
import { InquiryFormPropsType } from "../../type/container.type";

export const InquiryForm: React.FC<InquiryFormPropsType> = ({ setIsAlertModalOpen }) => {
    type Schedule = {
        date: string;
        location: string[];
        venue: string;
        eventType: string[];
        theme: string;
        startTime: string;
        endTime: string;
        budget: string;
        services: string[];
        images: (File | string)[];
        additionalInfo: string;
    };
    type FormDetails = {
        fullName: string;
        email: string;
        phone: string;
        schedule: Schedule[];
    };

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMP_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLICKEY_ID;

    const locationOptions = ["indoor", "outdoor"];
    const eventTypes = ["birthday party", "baby shower", "bridal shower", "gender reveal", "graduation party", "anniversary party", "grand opening", "wedding", "engagement party", "baptism", "corporate event", "other"];
    const serviceOptions = ["backdrop", "full scale decor (Table Set Up, Centerpieces, Dinnerware etc)", "other"];
    const initialFormDetails: FormDetails = {
        fullName: "",
        email: "",
        phone: "",
        schedule: [
            {
                date: "",
                location: [],
                venue: "",
                eventType: [],
                theme: "",
                startTime: "",
                endTime: "",
                budget: "",
                services: [],
                images: [],
                additionalInfo: ""
            },
        ],
    };

    const formRef = useRef<HTMLFormElement>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const {
        isInquiryFormModalOpen,
        setIsInquiryFormModalOpen
    } = useContext(Context);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formDetails, setFormDetails] = useState(initialFormDetails);

    const handleClickOutside = () => {
        setIsInquiryFormModalOpen(false);
        setError(null);
        return setFormDetails(initialFormDetails);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<unknown>,
        index: number | null = null
    ) => {
        const { name, type, value, files } = e.target as HTMLInputElement;

        if (type === "checkbox") {
            if (index === null) return;
            setFormDetails((prev) => {
                const schedules = [...prev.schedule];
                const key = name as keyof Schedule;
                if (!Array.isArray(schedules[index][key])) return prev;

                const arr = [...(schedules[index][key] as string[])];
                const itemValue = value;
                const itemIndex = arr.indexOf(itemValue);

                if (itemIndex > -1) {
                    arr.splice(itemIndex, 1);
                } else {
                    arr.push(itemValue);
                }

                schedules[index] = {
                    ...schedules[index],
                    [key]: arr,
                };

                return {
                    ...prev,
                    schedule: schedules,
                };
            });
        } else if (type === "file") {
            if (index === null || !files) return;
            const fileArray = Array.from(files);

            setFormDetails((prev) => {
                const schedules = [...prev.schedule];
                schedules[index] = {
                    ...schedules[index],
                    images: fileArray,
                };
                return {
                    ...prev,
                    schedule: schedules,
                };
            });
        } else {
            if (index === null) {
                setFormDetails((prev) => ({
                    ...prev,
                    [name]: value,
                }));
            } else {
                setFormDetails((prev) => {
                    const schedules = [...prev.schedule];
                    const key = name as keyof Schedule;
                    schedules[index] = {
                        ...schedules[index],
                        [key]: value,
                    };
                    return {
                        ...prev,
                        schedule: schedules,
                    };
                });
            }
        }
    };

    const handleDeleteAttachment = (fileToDelete: File, scheduleIndex: number) => {
        setFormDetails((prev) => {
            const updatedSchedule = [...prev.schedule];
            updatedSchedule[scheduleIndex].images = updatedSchedule[scheduleIndex].images.filter(file => file !== fileToDelete);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            };
            return {
                ...prev,
                schedule: updatedSchedule
            };
        });
    };

    const handleAddEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        setFormDetails((prev) => ({
            ...prev,
            schedule: [
                ...prev.schedule,
                {
                    date: "",
                    location: [],
                    venue: "",
                    eventType: [],
                    theme: "",
                    startTime: "",
                    endTime: "",
                    budget: "",
                    services: [],
                    images: [],
                    additionalInfo: "",
                },
            ],
        }));
    };

    const handleRemoveEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, indexToRemove: number) => {
        e.preventDefault();
        setFormDetails((prev) => ({
            ...prev,
            schedule: prev.schedule.filter((_, i) => i !== indexToRemove),
        }));
    };

    const buildEmailBody = (formData: FormDetails) => {
        let body = `
          <div style="font-family: 'Inter', sans-serif; font-size: 14px; color: #000;">
            <p>Hello Inquiry Team,</p>
            <p>You got a new inquiry.</p>
            <h3>Contact Information:</h3>
            <ul>
              <li><strong>Full Name:</strong> ${formData.fullName}</li>
              <li><strong>Email:</strong> ${formData.email}</li>
              <li><strong>Phone:</strong> ${formData.phone}</li>
            </ul>
            <hr />
            <h3>Schedule Information:</h3>
        `;

        formData.schedule.forEach((s, i) => {
            body += `
            <h4 style="margin-bottom: 4px;">Day ${i + 1}</h4>
            <ul>
              <li><strong>Date:</strong> ${s.date}</li>
              <li><strong>Start Time:</strong> ${s.startTime}</li>
              <li><strong>End Time:</strong> ${s.endTime}</li>
              <li><strong>Location:</strong> ${s.location.join(', ') || 'N/A'}</li>
              <li><strong>Venue:</strong> ${s.venue}</li>
              <li><strong>Type:</strong> ${s.eventType.join(', ') || 'N/A'}</li>
              <li><strong>Theme:</strong> ${s.theme}</li>
              <li><strong>Budget:</strong> ${s.budget}</li>
              <li><strong>Services:</strong> ${s.services.join(', ') || 'N/A'}</li>
              <li><strong>Additional Info:</strong> ${s.additionalInfo}</li>
            </ul>
            `;

            if (s.images && s.images.length > 0) {
                body += `<div style="margin-top: 10px;">`;
                s.images.forEach((url, index) => {
                    body += `<img src="${url}" alt="Inspiration ${index + 1}" width="150" style="margin: 5px; border: 1px solid #ccc;" />`;
                });
                body += `</div>`;
            };

            body += `<hr />`;
        });

        body += `
            <p>Best wishes,<br/>Designs By Lami Team</p>
          </div>
        `;

        return body;
    };

    const uploadImageToCloudinary = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "dbl_email_attachments");

        const response = await fetch("https://api.cloudinary.com/v1_1/dkybdqwwt/image/upload", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Cloudinary upload failed");
        }

        const data = await response.json();
        return data.secure_url;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!SERVICE_ID || !TEMP_ID || !PUBLIC_KEY) return;
        setError(null);
        setIsLoading(true);
        try {
            const updatedSchedule = await Promise.all(
                formDetails.schedule.map(async (entry) => {
                    const imageUrls = await Promise.all(
                        entry.images.map((file) => uploadImageToCloudinary(file as File))
                    );
                    return {
                        ...entry,
                        images: imageUrls,
                    };
                })
            );
            const finalEmailBody = buildEmailBody({
                ...formDetails,
                schedule: updatedSchedule
            });
            const response = await emailjs.send(
                SERVICE_ID,
                TEMP_ID,
                {
                    fullName: formDetails.fullName,
                    email: formDetails.email,
                    body: finalEmailBody,
                },
                PUBLIC_KEY
            );
            if (response.status === 200) {
                setIsInquiryFormModalOpen(false);
                setIsAlertModalOpen(true);
            } else {
                setError('Failed to submit form. Please check inputs and try again.');
            }
        } catch (error) {
            console.error("Failed to send email:", error);
            setError("Failed to submit form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <BaseFormModal
            ref={formRef}
            title="Designs By Lami Inquiry Form"
            open={isInquiryFormModalOpen}
            handleClickOutside={handleClickOutside}
            handleSubmit={handleSubmit}
        >
            <InquiryFormWrapper>
                <Box
                    marginBlockStart={"var(--flex-gap)"}
                >
                    <Typography
                        variant="body1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={16}
                        lineHeight={"normal"}
                        whiteSpace={"normal"}
                        color={"var(--input-field-border-color)"}
                    >
                        Thank you for your interest in Designs By Lami. Please complete the questionnaire below to provide more information about your event. Also, please upload any inspirational pictures to give a better idea of your vision for your event
                    </Typography>
                </Box>
                <Grid
                    container
                    component={"div"}
                    spacing={"var(--flex-gap)"}
                    className="fieldset-grid-wrapper"
                >
                    <Grid
                        size={{ mobile: 12 }}
                    >
                        <BaseFieldSet>
                            <BaseLabel
                                colour="var(--form-label-color)"
                            >
                                Full Name
                            </BaseLabel>
                            <BaseInput
                                name="fullName"
                                value={formDetails.fullName}
                                placeholder="Enter Full Name"
                                onChange={(e) => handleChange(e)}
                            />
                        </BaseFieldSet>
                    </Grid>
                    <Grid
                        size={{ mobile: 12 }}
                    >
                        <BaseFieldSet>
                            <BaseLabel
                                colour="var(--form-label-color)"
                            >
                                Email Address
                            </BaseLabel>
                            <BaseInput
                                name="email"
                                value={formDetails.email}
                                placeholder="Enter Email Address"
                                onChange={(e) => handleChange(e)}
                            />
                        </BaseFieldSet>
                    </Grid>
                    <Grid
                        size={{ mobile: 12 }}
                    >
                        <BaseFieldSet>
                            <BaseLabel
                                colour="var(--form-label-color)"
                            >
                                Phone
                            </BaseLabel>
                            <BaseInput
                                name="phone"
                                value={formDetails.phone}
                                placeholder="Enter Phone"
                                onChange={(e) => handleChange(e)}
                            />
                        </BaseFieldSet>
                    </Grid>
                    {formDetails.schedule.map((schedule, outerIndex) => (
                        <Stack
                            key={outerIndex}
                            gap={"var(--flex-gap)"}
                            width={"-webkit-fill-available"}
                            paddingTop={"var(--basic-padding)"}
                            borderTop={"2px solid var(--form-header-border)"}
                        >
                            <Grid
                                size={{ mobile: 12 }}
                            >
                                <BaseFieldSet>
                                    <BaseLabel
                                        colour="var(--form-label-color)"
                                    >
                                        Event Date
                                    </BaseLabel>
                                    <BaseInput
                                        name="date"
                                        type="date"
                                        value={schedule.date}
                                        onChange={(e) => handleChange(e, outerIndex)}
                                    />
                                    {/* the idea is to simulate field for email js to capture */}
                                    <input type="hidden" name={`schedule[${outerIndex}][date]`} value={schedule.date} />
                                </BaseFieldSet>
                            </Grid>
                            <Grid
                                size={{ mobile: 12 }}
                            >
                                <BaseFieldSet>
                                    <BaseLabel
                                        colour="var(--form-label-color)"
                                    >
                                        Event Start Time
                                    </BaseLabel>
                                    <BaseInput
                                        name="startTime"
                                        value={schedule.startTime}
                                        placeholder="Enter Start Time"
                                        onChange={(e) => handleChange(e, outerIndex)}
                                    />
                                    {/* the idea is to simulate field for email js to capture */}
                                    <input type="hidden" name={`schedule[${outerIndex}][startTime]`} value={schedule.startTime} />
                                </BaseFieldSet>
                            </Grid>
                            <Grid
                                size={{ mobile: 12 }}
                            >
                                <BaseFieldSet>
                                    <BaseLabel
                                        colour="var(--form-label-color)"
                                    >
                                        Event End Time
                                    </BaseLabel>
                                    <BaseInput
                                        name="endTime"
                                        value={schedule.endTime}
                                        placeholder="Enter End Time"
                                        onChange={(e) => handleChange(e, outerIndex)}
                                    />
                                    {/* the idea is to simulate field for email js to capture */}
                                    <input type="hidden" name={`schedule[${outerIndex}][endTime]`} value={schedule.endTime} />
                                </BaseFieldSet>
                            </Grid>
                            <Grid
                                size={{ mobile: 12 }}
                            >
                                <BaseFieldSet>
                                    <Typography
                                        component={"span"}
                                        variant="subtitle1"
                                        fontFamily={"Inter"}
                                        fontWeight={400}
                                        fontSize={16}
                                        lineHeight={"normal"}
                                        color={"var(--dark-color)"}
                                    >
                                        Event Location
                                    </Typography>
                                    {/* the idea is to simulate field for email js to capture */}
                                    {schedule.location.map((location, i) => (
                                        <input
                                            key={i}
                                            type="hidden"
                                            name={`schedule[${outerIndex}][location][]`}
                                            value={location}
                                        />
                                    ))}
                                    {locationOptions?.map((location, index) => (
                                        <BaseLabel
                                            key={index}
                                            colour="var(--form-label-color)"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "calc(var(--flex-gap)/4)",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <BaseInput
                                                name="location"
                                                type="checkbox"
                                                value={location}
                                                inputProps={{
                                                    checked: schedule.location?.includes(location),
                                                }}
                                                sx={{ flexShrink: 0 }}
                                                onChange={(e) => handleChange(e, outerIndex)}
                                            />
                                            <Typography
                                                component={"span"}
                                                variant="subtitle1"
                                                fontFamily={"Inter"}
                                                fontWeight={400}
                                                fontSize={16}
                                                lineHeight={"normal"}
                                                color={"var(--dark-color)"}
                                            >
                                                {location.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                            </Typography>
                                        </BaseLabel>
                                    ))}
                                </BaseFieldSet>
                            </Grid>
                            <Grid
                                size={{ mobile: 12 }}
                            >
                                <BaseFieldSet>
                                    <Typography
                                        component={"span"}
                                        variant="subtitle1"
                                        fontFamily={"Inter"}
                                        fontWeight={400}
                                        fontSize={16}
                                        lineHeight={"normal"}
                                        color={"var(--dark-color)"}
                                    >
                                        Type of Event
                                    </Typography>
                                    {/* the idea is to simulate field for email js to capture */}
                                    {schedule.eventType.map((type, i) => (
                                        <input
                                            key={i}
                                            type="hidden"
                                            name={`schedule[${outerIndex}][eventType][]`}
                                            value={type}
                                        />
                                    ))}
                                    {eventTypes?.map((type, index) => (
                                        <BaseLabel
                                            key={index}
                                            colour="var(--form-label-color)"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "calc(var(--flex-gap)/4)",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <BaseInput
                                                name="eventType"
                                                type="checkbox"
                                                value={type}
                                                inputProps={{
                                                    checked: schedule.eventType?.includes(type),
                                                }}
                                                sx={{ flexShrink: 0 }}
                                                onChange={(e) => handleChange(e, outerIndex)}
                                            />
                                            <Typography
                                                component={"span"}
                                                variant="subtitle1"
                                                fontFamily={"Inter"}
                                                fontWeight={400}
                                                fontSize={16}
                                                lineHeight={"normal"}
                                                color={"var(--dark-color)"}
                                            >
                                                {type.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                            </Typography>
                                        </BaseLabel>
                                    ))}
                                </BaseFieldSet>
                            </Grid>
                            <Grid
                                size={{ mobile: 12 }}
                            >
                                <BaseFieldSet>
                                    <BaseLabel
                                        colour="var(--form-label-color)"
                                    >
                                        Event Theme/Color Scheme
                                    </BaseLabel>
                                    <BaseInput
                                        name="theme"
                                        value={schedule.theme}
                                        placeholder="Specify Event Theme"
                                        onChange={(e) => handleChange(e, outerIndex)}
                                    />
                                    {/* the idea is to simulate field for email js to capture */}
                                    <input type="hidden" name={`schedule[${outerIndex}][theme]`} value={schedule.theme} />
                                </BaseFieldSet>
                            </Grid>
                            <Grid
                                size={{ mobile: 12 }}
                            >
                                <BaseFieldSet>
                                    <BaseLabel
                                        colour="var(--form-label-color)"
                                    >
                                        Event Address
                                    </BaseLabel>
                                    <BaseInput
                                        name="venue"
                                        value={schedule.venue}
                                        placeholder="Specify Event Venue"
                                        onChange={(e) => handleChange(e, outerIndex)}
                                    />
                                    {/* the idea is to simulate field for email js to capture */}
                                    <input type="hidden" name={`schedule[${outerIndex}][venue]`} value={schedule.venue} />
                                </BaseFieldSet>
                            </Grid>
                            <Grid
                                size={{ mobile: 12 }}
                            >
                                <BaseFieldSet>
                                    <BaseLabel
                                        colour="var(--form-label-color)"
                                    >
                                        Budget
                                    </BaseLabel>
                                    <BaseInput
                                        name="budget"
                                        value={schedule.budget}
                                        placeholder="Specify Budget"
                                        onChange={(e) => handleChange(e, outerIndex)}
                                    />
                                    {/* the idea is to simulate field for email js to capture */}
                                    <input type="hidden" name={`schedule[${outerIndex}][budget]`} value={schedule.budget} />
                                </BaseFieldSet>
                            </Grid>
                            <Grid
                                size={{ mobile: 12 }}
                            >
                                <BaseFieldSet>
                                    <Typography
                                        component={"span"}
                                        variant="subtitle1"
                                        fontFamily={"Inter"}
                                        fontWeight={400}
                                        fontSize={16}
                                        lineHeight={"normal"}
                                        color={"var(--dark-color)"}
                                    >
                                        Services Required
                                    </Typography>
                                    {/* the idea is to simulate field for email js to capture */}
                                    {schedule.services.map((service, i) => (
                                        <input
                                            key={i}
                                            type="hidden"
                                            name={`schedule[${outerIndex}][services][]`}
                                            value={service}
                                        />
                                    ))}
                                    {serviceOptions?.map((service, index) => (
                                        <BaseLabel
                                            key={index}
                                            colour="var(--form-label-color)"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "calc(var(--flex-gap)/4)",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <BaseInput
                                                name="services"
                                                type="checkbox"
                                                value={service}
                                                inputProps={{
                                                    checked: schedule.services?.includes(service),
                                                }}
                                                sx={{ flexShrink: 0 }}
                                                onChange={(e) => handleChange(e, outerIndex)}
                                            />
                                            <Typography
                                                component={"span"}
                                                variant="subtitle1"
                                                fontFamily={"Inter"}
                                                fontWeight={400}
                                                fontSize={16}
                                                lineHeight={"normal"}
                                                color={"var(--dark-color)"}
                                            >
                                                {service.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                            </Typography>
                                        </BaseLabel>
                                    ))}
                                </BaseFieldSet>
                            </Grid>
                            <Grid
                                size={{ mobile: 12 }}
                            >
                                <BaseFieldSet>
                                    <BaseLabel
                                        colour="var(--form-label-color)"
                                    >
                                        Inspiration Pictures
                                    </BaseLabel>
                                    <BaseInput
                                        type="file"
                                        name="images"
                                        inputRef={fileInputRef}
                                        inputProps={{
                                            accept: ".jpeg,.jpg,.png",
                                            multiple: true,
                                        }}
                                        onChange={(e) => handleChange(e, outerIndex)}
                                    />
                                    {schedule.images?.length > 0 && (
                                        <Stack
                                            direction={"row"}
                                            flexWrap={"wrap"}
                                            gap={"calc(var(--flex-gap)/4)"}
                                            marginBlockStart={"calc(var(--basic-margin)/4)"}
                                        >
                                            {schedule?.images?.map((file, index) => {
                                                if (file instanceof File) {
                                                    return (
                                                        <Chip key={index} label={file.name} onDelete={() => handleDeleteAttachment(file, index)} />
                                                    );
                                                } else if (typeof file === "string") {
                                                    return (
                                                        <Chip key={index} label={file.split('/').pop()} />
                                                    );
                                                }
                                                return null;
                                            })}
                                        </Stack>
                                    )}
                                </BaseFieldSet>
                            </Grid>
                            <Grid
                                size={{ mobile: 12 }}
                            >
                                <BaseFieldSet>
                                    <BaseLabel
                                        colour="var(--form-label-color)"
                                    >
                                        Additional Information
                                    </BaseLabel>
                                    <BaseInput
                                        multiline
                                        minRows={4}
                                        name="additionalInfo"
                                        value={schedule.additionalInfo}
                                        placeholder="Add any additional details or notes."
                                        onChange={(e) => handleChange(e, outerIndex)}
                                    />
                                    {/* the idea is to simulate field for email js to capture */}
                                    <input type="hidden" name={`schedule[${outerIndex}][additionalInfo]`} value={schedule.additionalInfo} />
                                </BaseFieldSet>
                            </Grid>
                            <Stack
                                direction={"row"}
                                justifyContent={"flex-end"}
                                gap={"calc(var(--flex-gap)/4)"}
                            >
                                {(formDetails.schedule.length - 1) === outerIndex && (
                                    <Box
                                        component={"div"}
                                        className="add-event-button-box"
                                        onClick={handleAddEvent}
                                    >
                                        <IconButton>
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                )}
                                {formDetails.schedule.length > 1 && (
                                    <Box
                                        component={"div"}
                                        className="remove-event-button-box"
                                        onClick={(e) => handleRemoveEvent(e, outerIndex)}
                                    >
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                )}
                            </Stack>
                        </Stack>
                    ))}
                </Grid>
                {error && <Typography
                    fontFamily={"Inter"}
                    fontWeight={"600"}
                    fontSize={14}
                    lineHeight={"normal"}
                    color={"var(--primary-color)"}
                    whiteSpace={"normal"}
                >
                    {error}
                </Typography>}
                <Box
                    overflow={"hidden"}
                >
                    <BaseButton
                        type="submit"
                        variant="contained"
                        bgcolor="var(--primary-color)"
                        disableElevation
                        disabled={isLoading}
                        sx={{
                            width: { mobile: "100%", miniTablet: "auto" }
                        }}
                    >
                        {isLoading ? (
                            <CircularProgress color="inherit" className="loader" />
                        ) : (
                            <Typography
                                variant={"button"}
                                fontFamily={"inherit"}
                                fontWeight={"inherit"}
                                fontSize={"inherit"}
                                lineHeight={"inherit"}
                                color={"inherit"}
                                textTransform={"inherit"}
                            >
                                Submit
                            </Typography>
                        )}
                    </BaseButton>
                </Box>
            </InquiryFormWrapper>
        </BaseFormModal>
    )
};
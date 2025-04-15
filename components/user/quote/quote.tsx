"use client";

import React, { useState, useEffect, useRef } from "react";
import { poetsen_one } from "@/config/fonts";
import { Card, CardBody, Checkbox, Button } from "@heroui/react";
import { capitalize, formatNumber } from "@/utils/formatters";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { sendQuotation } from "@/actions/user";
import { plans } from "@/data/plans";
import { Service } from "@/types/user";

const Quote = () => {
  const quotationRef = useRef<HTMLDivElement>(null);

  const [isExporting, setIsExporting] = useState(false);

  const [plan, setPlan] = useState("basic");
  const [services, setServices] = useState<Service[]>([]);
  const [total, setTotal] = useState(0);
  const [logo, setLogo] = useState("");

  const onServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const updatedServices = services.map((service) => {
      if (service.name == value) {
        return {
          ...service,
          isSelected: !service.isSelected,
        };
      } else {
        return service;
      }
    });

    setServices(updatedServices);
  };

  const createPDF = async () => {
    const canvas = await html2canvas(quotationRef.current!, {
      scale: 2,
    });

    const pdf = new jsPDF();

    const data = canvas.toDataURL("image/png", 1.0);
    const props = pdf.getImageProperties(data);
    const width = pdf.internal.pageSize.getWidth();
    const height = (props.height * width) / props.width;

    console.log(width / 2);

    pdf.addImage(logo, "PNG", width / 2 - 15, 0, 30, 30);

    pdf.setFontSize(22);
    pdf.text("Quotation:", width / 2, 35, { align: "center" });

    pdf.setFontSize(20);
    pdf.text(
      `${plan == "vip" ? plan.toUpperCase() : capitalize(plan)} Plan`,
      width / 2,
      42,
      { align: "center" }
    );

    pdf.setFontSize(12);
    pdf.text("Date: " + new Date().toLocaleDateString(), width - 15, 52, {
      align: "right",
    });

    pdf.setLineWidth(0.5);
    pdf.line(10, 54, width - 10, 54);
    pdf.setLineWidth(0.1);

    pdf.addImage(data, "PNG", 15, 56, width - 30, height);

    return pdf;
  };

  const exportToPDF = async () => {
    setIsExporting(true);

    const pdf = await createPDF();
    pdf.save("quotation.pdf");

    setIsExporting(false);

    const base64 = pdf.output("datauristring");
    sendQuotation(base64);
  };

  useEffect(() => {
    const getLogo = async () => {
      const response = await fetch("/images/logo.png");
      const blob = await response.blob();

      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(blob);
    };

    getLogo();
  }, []);

  useEffect(() => {
    const filteredServices = plans[plan].map((service) => {
      return { ...service, isSelected: true };
    });
    setServices(filteredServices);
  }, [plan]);

  useEffect(() => {
    const result = services.reduce(
      (total, service) => total + (service.isSelected ? service.price : 0),
      0
    );
    setTotal(result);
  }, [services]);

  return (
    <>
      <section>
        <div className="flex flex-col justify-center px-4 md:px-12 xl:px-32 2xl:px-48 py-16">
          <div className="flex flex-col md:flex-row justify-between gap-4 pb-16">
            <div className="max-w-4xl">
              <h1 className={`text-5xl text-accent ${poetsen_one.className}`}>
                GET A QUOTE
              </h1>

              <h1 className={`text-4xl text-primary ${poetsen_one.className}`}>
                We believe in delivering high-quality solutions to help you grow
                your business effectively.
              </h1>
            </div>
          </div>

          <div>
            <Card className="p-4">
              <CardBody>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center">
                    <div className="flex flex-wrap justify-center gap-4">
                      {Object.keys(plans).map((name) => (
                        <Card key={name} className="py-4 px-12">
                          <CardBody className="flex justify-center">
                            <Checkbox
                              className={`w-full ${name == "vip" ? "uppercase" : "capitalize"}`}
                              value={name}
                              isSelected={plan == name}
                              onChange={(e) => setPlan(e.target.value)}
                            >
                              {name}
                            </Checkbox>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {plan && (
                    <div className="flex flex-col gap-4">
                      <div className="mx-4" ref={quotationRef}>
                        <div className="flex justify-end items-center gap-2 mb-1">
                          <h1 className="text-lg font-bold">Total:</h1>
                          <span className="text-lg font-semibold">
                            ₱{formatNumber(total)}
                          </span>
                        </div>

                        <table className="table-auto w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="text-left py-2 px-4 border border-gray-300">
                                Service
                              </th>
                              <th className="text-left py-2 px-4 border border-gray-300">
                                Description
                              </th>
                              <th className="text-left py-2 px-4 border border-gray-300">
                                Price
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {services.map((service, index) => (
                              <tr
                                key={index}
                                className="border-b border-gray-300"
                              >
                                <td className="py-2 px-4 border border-gray-300">
                                  <div className="flex justify-start items-center">
                                    <Checkbox
                                      className="w-full"
                                      value={service.name}
                                      isSelected={service.isSelected}
                                      onChange={onServiceChange}
                                    >
                                      {service.name}
                                    </Checkbox>
                                  </div>
                                </td>
                                <td className="py-2 px-4 border border-gray-300">
                                  {service.description}
                                </td>
                                <td className="py-2 px-4 border border-gray-300">
                                  ₱{formatNumber(service.price)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="flex justify-end">
                        <Button
                          color="primary"
                          onPress={exportToPDF}
                          isLoading={isExporting}
                        >
                          Export to PDF
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;

﻿export const chatStyles = {
    container: {
        direction: "column",
        maxW: "600px",
        mx: "auto",
        p: "20px",
        bg: "#fff5e0",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        height: "100vh",
    },
    messageBox: {
        spacing: 3,
        align: "stretch",
        overflowY: "auto",
        flex: "1",
        maxH: "calc(100vh - 160px)",
        p: "10px",
        bg: "white",
        borderRadius: "5px",
        border: "1px solid #ddd",
        mb: "20px",
    },
    inputField: {
        size: "lg",
        border: "1px solid #ff7f32",
        borderRadius: "5px",
        bg: "white",
        _focus: {
            borderColor: "orange.500",
            boxShadow: "0 0 0 2px #ff7f32",
        },
    },
    sendButton: {
        bg: "orange.500",
        color: "white",
        px: "20px",
        py: "10px",
        fontWeight: "bold",
        borderRadius: "5px",
        _hover: { bg: "orange.600" },
    },
};
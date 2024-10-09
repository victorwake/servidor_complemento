{
    "documentType": "Contrato de Prestación de Servicios", // Clasificación automática por la IA
    "reviewedCriteria": [
      {
        "type": "Legal", // Tipo de criterio
        "groups": [
          {
            "group": "Responsabilidades", // Grupo de criterios
            "criteria": [
              {
                "title": "Limitación de Responsabilidad", // Título del criterio
                "description": "Verificar que las limitaciones de responsabilidad están bien definidas.", // Descripción
                "importance": "Alta", // Importancia
                "analysisResult": "KO", // Resultado del análisis
                "associatedNorms": ["Artículo 1234 del Código Civil"], // Normas asociadas
                "correctionProposals": [
                  "Agregar una cláusula que especifique las limitaciones de responsabilidad del proveedor."
                ] // Propuesta de corrección en caso de KO
              },
              {
                "title": "Obligaciones del Cliente",
                "description": "Revisar que las obligaciones del cliente estén bien detalladas.",
                "importance": "Media",
                "analysisResult": "OK",
                "associatedNorms": ["Artículo 567 del Código de Comercio", "Artículo 1234 del Código Civil"],
                "correctionProposals": []
              }
            ]
          },
          {
            "group": "Confidencialidad",
            "criteria": [
              {
                "title": "Cláusula de Confidencialidad",
                "description": "Verificar la existencia de una cláusula de confidencialidad.",
                "importance": "Alta",
                "analysisResult": "OK",
                "associatedNorms": ["Ley de Protección de Datos Personales"],
                "correctionProposals": []
              }
            ]
          }
        ]
      },
      {
        "type": "Técnico",
        "groups": [
          {
            "group": "Seguridad de la Información",
            "criteria": [
              {
                "title": "Protección de Datos",
                "description": "Revisión de las medidas de protección de datos.",
                "importance": "Alta",
                "analysisResult": "KO",
                "associatedNorms": ["ISO 27001"],
                "correctionProposals": [
                  "Implementar una política clara de protección de datos conforme a ISO 27001."
                ]
              }
            ]
          },
          {
            "group": "Disponibilidad de Servicios",
            "criteria": [
              {
                "title": "Garantía de Disponibilidad",
                "description": "Revisar que el acuerdo cubra la disponibilidad mínima del servicio.",
                "importance": "Media",
                "analysisResult": "OK",
                "associatedNorms": ["ISO 20000"],
                "correctionProposals": []
              }
            ]
          }
        ]
      }
    ],
    "globalReviewResult": {
      "legalVisa": "Visé Jurídico No Concedido", // Resultado global
      "compliancePercentage": 75 // % de criterios cumplidos
    }
  }
  
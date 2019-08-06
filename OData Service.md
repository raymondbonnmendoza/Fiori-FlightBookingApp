# Fiori-FlightBookingApp

OData Service Decvelopment in ABAP

Relevant TCODES:
SEGW: SAP Gateway Service Builder
/IWFND/MAINT_SERVICE: Activate and Maintain Services
SAP Gataway Client

DATA MODEL

Entity Type: Structures defined within an Odata service with a Key. Contains Properties (Fields) and Navigation Properties (Used to navigate to another entity type from the current entity type)
Entity Sets: If entity types are structures, Entity sets are tables. An entity set is always linked to a particular Entity type
Association:
Association Sets:
Complex Types:
Function Import:

IMPLEMENTATION

When runtime objects are generated through SEGW, we get quite a few classes. The class relevant to implementation is the one ending in DPC_EXT

*GET_ENTITYSET
*GET_ENTITY
*CREATE_ENTITY
*UPDATE_ENTITY
*DELETE_ENTITY
*GET_STREAM
*CREATE_STREAM
*UPDATE_STREAM
*DELETE_STREAM
*EXECUTE_ACTION

Several classes can be used within the implementation for several functions

 CALL METHOD io_tech_request_context->get_source_keys
      RECEIVING
        rt_source_keys = lt_key_tab.

    IF lt_key_tab IS INITIAL.
      lt_key_tab = io_tech_request_context->get_source_keys( ).
    ENDIF.
    IF lt_key_tab IS INITIAL.
      LOOP AT it_key_tab INTO ls_key_tab.
        ls_keys-name = ls_key_tab-name.
        ls_keys-value = ls_key_tab-value.
        APPEND ls_keys TO lt_key_tab.
        CLEAR  ls_keys.
      ENDLOOP.
    ENDIF.

    LOOP AT lt_key_tab INTO ls_keys.
      CASE ls_keys-name.
        WHEN 'SalesOrderNumber'.
          zcl_wot_authorisations=>get_instance( )->check_order( ls_keys-value ).

          CALL FUNCTION 'CONVERSION_EXIT_ALPHA_INPUT'
            EXPORTING
              input  = ls_keys-value
            IMPORTING
              output = lv_vbeln.
          er_entity-salesordernumber = lv_vbeln.
        WHEN 'ItemNumber'.
          lv_item_number = ls_keys-value.
          er_entity-itemnumber = lv_item_number.
        WHEN OTHERS.
          " Log message in the application log
          me->/iwbep/if_sb_dpc_comm_services~log_message(
            EXPORTING
              iv_msg_type   = 'E'
              iv_msg_id     = '/IWBEP/MC_SB_DPC_ADM'
              iv_msg_number = 021
              iv_msg_v1     = ls_keys-name ).
          " Raise Exception
          RAISE EXCEPTION TYPE /iwbep/cx_mgw_tech_exception
            EXPORTING
              textid = /iwbep/cx_mgw_tech_exception=>internal_error.
      ENDCASE.

    ENDLOOP.

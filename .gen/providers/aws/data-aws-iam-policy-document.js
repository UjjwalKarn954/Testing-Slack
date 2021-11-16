"use strict";
// https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DataAwsIamPolicyDocument = void 0;
var cdktf = require("cdktf");
function dataAwsIamPolicyDocumentStatementConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        test: cdktf.stringToTerraform(struct.test),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
        variable: cdktf.stringToTerraform(struct.variable)
    };
}
function dataAwsIamPolicyDocumentStatementNotPrincipalsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        identifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct.identifiers),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function dataAwsIamPolicyDocumentStatementPrincipalsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        identifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct.identifiers),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function dataAwsIamPolicyDocumentStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        effect: cdktf.stringToTerraform(struct.effect),
        not_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.notActions),
        not_resources: cdktf.listMapper(cdktf.stringToTerraform)(struct.notResources),
        resources: cdktf.listMapper(cdktf.stringToTerraform)(struct.resources),
        sid: cdktf.stringToTerraform(struct.sid),
        condition: cdktf.listMapper(dataAwsIamPolicyDocumentStatementConditionToTerraform)(struct.condition),
        not_principals: cdktf.listMapper(dataAwsIamPolicyDocumentStatementNotPrincipalsToTerraform)(struct.notPrincipals),
        principals: cdktf.listMapper(dataAwsIamPolicyDocumentStatementPrincipalsToTerraform)(struct.principals)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html aws_iam_policy_document}
*/
var DataAwsIamPolicyDocument = /** @class */ (function (_super) {
    __extends(DataAwsIamPolicyDocument, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html aws_iam_policy_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamPolicyDocumentConfig = {}
    */
    function DataAwsIamPolicyDocument(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_policy_document',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._overrideJson = config.overrideJson;
        _this._overridePolicyDocuments = config.overridePolicyDocuments;
        _this._policyId = config.policyId;
        _this._sourceJson = config.sourceJson;
        _this._sourcePolicyDocuments = config.sourcePolicyDocuments;
        _this._version = config.version;
        _this._statement = config.statement;
        return _this;
    }
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "json", {
        // json - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('json');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "overrideJson", {
        get: function () {
            return this.getStringAttribute('override_json');
        },
        set: function (value) {
            this._overrideJson = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamPolicyDocument.prototype.resetOverrideJson = function () {
        this._overrideJson = undefined;
    };
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "overrideJsonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._overrideJson;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "overridePolicyDocuments", {
        get: function () {
            return this.getListAttribute('override_policy_documents');
        },
        set: function (value) {
            this._overridePolicyDocuments = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamPolicyDocument.prototype.resetOverridePolicyDocuments = function () {
        this._overridePolicyDocuments = undefined;
    };
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "overridePolicyDocumentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._overridePolicyDocuments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "policyId", {
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        set: function (value) {
            this._policyId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamPolicyDocument.prototype.resetPolicyId = function () {
        this._policyId = undefined;
    };
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "policyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "sourceJson", {
        get: function () {
            return this.getStringAttribute('source_json');
        },
        set: function (value) {
            this._sourceJson = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamPolicyDocument.prototype.resetSourceJson = function () {
        this._sourceJson = undefined;
    };
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "sourceJsonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceJson;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "sourcePolicyDocuments", {
        get: function () {
            return this.getListAttribute('source_policy_documents');
        },
        set: function (value) {
            this._sourcePolicyDocuments = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamPolicyDocument.prototype.resetSourcePolicyDocuments = function () {
        this._sourcePolicyDocuments = undefined;
    };
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "sourcePolicyDocumentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourcePolicyDocuments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamPolicyDocument.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "statement", {
        get: function () {
            return this.interpolationForAttribute('statement');
        },
        set: function (value) {
            this._statement = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamPolicyDocument.prototype.resetStatement = function () {
        this._statement = undefined;
    };
    Object.defineProperty(DataAwsIamPolicyDocument.prototype, "statementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statement;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsIamPolicyDocument.prototype.synthesizeAttributes = function () {
        return {
            override_json: cdktf.stringToTerraform(this._overrideJson),
            override_policy_documents: cdktf.listMapper(cdktf.stringToTerraform)(this._overridePolicyDocuments),
            policy_id: cdktf.stringToTerraform(this._policyId),
            source_json: cdktf.stringToTerraform(this._sourceJson),
            source_policy_documents: cdktf.listMapper(cdktf.stringToTerraform)(this._sourcePolicyDocuments),
            version: cdktf.stringToTerraform(this._version),
            statement: cdktf.listMapper(dataAwsIamPolicyDocumentStatementToTerraform)(this._statement)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsIamPolicyDocument.tfResourceType = "aws_iam_policy_document";
    return DataAwsIamPolicyDocument;
}(cdktf.TerraformDataSource));
exports.DataAwsIamPolicyDocument = DataAwsIamPolicyDocument;

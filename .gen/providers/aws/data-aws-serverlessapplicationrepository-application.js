"use strict";
// https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application.html
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
exports.DataAwsServerlessapplicationrepositoryApplication = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application.html aws_serverlessapplicationrepository_application}
*/
var DataAwsServerlessapplicationrepositoryApplication = /** @class */ (function (_super) {
    __extends(DataAwsServerlessapplicationrepositoryApplication, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/serverlessapplicationrepository_application.html aws_serverlessapplicationrepository_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServerlessapplicationrepositoryApplicationConfig
    */
    function DataAwsServerlessapplicationrepositoryApplication(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_serverlessapplicationrepository_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationId = config.applicationId;
        _this._semanticVersion = config.semanticVersion;
        return _this;
    }
    Object.defineProperty(DataAwsServerlessapplicationrepositoryApplication.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServerlessapplicationrepositoryApplication.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServerlessapplicationrepositoryApplication.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServerlessapplicationrepositoryApplication.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServerlessapplicationrepositoryApplication.prototype, "requiredCapabilities", {
        // required_capabilities - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('required_capabilities');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServerlessapplicationrepositoryApplication.prototype, "semanticVersion", {
        get: function () {
            return this.getStringAttribute('semantic_version');
        },
        set: function (value) {
            this._semanticVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsServerlessapplicationrepositoryApplication.prototype.resetSemanticVersion = function () {
        this._semanticVersion = undefined;
    };
    Object.defineProperty(DataAwsServerlessapplicationrepositoryApplication.prototype, "semanticVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._semanticVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServerlessapplicationrepositoryApplication.prototype, "sourceCodeUrl", {
        // source_code_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_code_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServerlessapplicationrepositoryApplication.prototype, "templateUrl", {
        // template_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('template_url');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsServerlessapplicationrepositoryApplication.prototype.synthesizeAttributes = function () {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            semantic_version: cdktf.stringToTerraform(this._semanticVersion)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsServerlessapplicationrepositoryApplication.tfResourceType = "aws_serverlessapplicationrepository_application";
    return DataAwsServerlessapplicationrepositoryApplication;
}(cdktf.TerraformDataSource));
exports.DataAwsServerlessapplicationrepositoryApplication = DataAwsServerlessapplicationrepositoryApplication;
